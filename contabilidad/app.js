/* ═══════════════════════════════════════════════
   FACTURAPRO — app.js
   ═══════════════════════════════════════════════ */

'use strict';

// ── CONSTANTS ────────────────────────────────────
const LOGO_PATH = 'logo.png';

const CURRENCY_SYMBOLS = { EUR: '€', USD: '$', GBP: '£', MXN: '$' };

// ── STATE ────────────────────────────────────────
let productRowCount = 0;
let logoDataURL = null;

// ── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setDefaultDates();
  addProductRow();
  addProductRow();
  loadLogo();
  bindEvents();
  updateSummary();
});

function setDefaultDates() {
  const today = new Date();
  const fmt = d => d.toISOString().split('T')[0];
  const due = new Date(today); due.setDate(due.getDate() + 30);
  document.getElementById('invoiceDate').value = fmt(today);
  document.getElementById('dueDate').value = fmt(due);
  document.getElementById('invoiceNumber').value = `FAC-${today.getFullYear()}-001`;
}

function loadLogo() {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width; canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    logoDataURL = canvas.toDataURL('image/png');
  };
  img.src = LOGO_PATH;
}

// ── EVENT BINDING ────────────────────────────────
function bindEvents() {
  document.getElementById('addProductBtn').addEventListener('click', addProductRow);
  document.getElementById('invoiceForm').addEventListener('submit', e => { e.preventDefault(); generatePDF(); });
  document.getElementById('previewBtn').addEventListener('click', previewPDF);
  document.getElementById('clearBtn').addEventListener('click', clearForm);

  // Live summary updates
  document.getElementById('invoiceForm').addEventListener('input', updateSummary);
  document.getElementById('taxRate').addEventListener('input', e => {
    document.getElementById('taxBadge').textContent = `${e.target.value}%`;
    updateSummary();
  });
}

// ── PRODUCT ROWS ─────────────────────────────────
function addProductRow() {
  productRowCount++;
  const id = productRowCount;
  const container = document.getElementById('productsContainer');

  const row = document.createElement('div');
  row.className = 'product-row';
  row.dataset.rowId = id;
  row.innerHTML = `
    <input type="text"   class="field-input p-name"  placeholder="Descripción del producto/servicio" />
    <input type="number" class="field-input p-qty"   placeholder="1"   min="0" step="1"    value="1" />
    <input type="number" class="field-input p-price" placeholder="0,00" min="0" step="0.01" value="" />
    <input type="number" class="field-input p-disc"  placeholder="0"   min="0" max="100" step="0.5" value="0" />
    <div class="product-total" id="rowTotal-${id}">—</div>
    <button type="button" class="btn-remove-product" aria-label="Eliminar línea" onclick="removeProductRow(${id})">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>`;

  row.querySelectorAll('input').forEach(inp => inp.addEventListener('input', updateSummary));
  container.appendChild(row);
  updateSummary();
}

function removeProductRow(id) {
  const row = document.querySelector(`[data-row-id="${id}"]`);
  if (!row) return;
  const container = document.getElementById('productsContainer');
  if (container.children.length <= 1) { showToast('Debe haber al menos una línea de producto.', 'error'); return; }
  row.style.animation = 'rowSlideIn .2s ease reverse';
  setTimeout(() => { row.remove(); updateSummary(); }, 180);
}

// ── CALCULATIONS ──────────────────────────────────
function getProducts() {
  return [...document.querySelectorAll('.product-row')].map(row => {
    const name = row.querySelector('.p-name').value.trim();
    const qty = parseFloat(row.querySelector('.p-qty').value) || 0;
    const price = parseFloat(row.querySelector('.p-price').value) || 0;
    const disc = parseFloat(row.querySelector('.p-disc').value) || 0;
    const lineTotal = qty * price * (1 - disc / 100);
    return { name, qty, price, disc, lineTotal, rowId: row.dataset.rowId };
  });
}

function calcTotals(products) {
  const currency = document.getElementById('currency').value;
  const symbol = CURRENCY_SYMBOLS[currency] || '€';
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
  const globalDisc = parseFloat(document.getElementById('discount').value) || 0;

  const subtotalRaw = products.reduce((s, p) => s + p.lineTotal, 0);
  const discountAmount = subtotalRaw * (globalDisc / 100);
  const subtotal = subtotalRaw - discountAmount;
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  return { subtotalRaw, discountAmount, subtotal, taxAmount, total, taxRate, globalDisc, symbol, currency };
}

function formatMoney(val, symbol) {
  return `${symbol}${val.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

// ── LIVE SUMMARY ─────────────────────────────────
function updateSummary() {
  const products = getProducts();
  const t = calcTotals(products);

  // Update per-row totals
  products.forEach(p => {
    const el = document.getElementById(`rowTotal-${p.rowId}`);
    if (el) el.textContent = p.lineTotal > 0 ? formatMoney(p.lineTotal, t.symbol) : '—';
  });

  // Header info
  document.getElementById('previewInvoiceNumber').textContent =
    document.getElementById('invoiceNumber').value || '—';
  document.getElementById('previewDate').textContent =
    document.getElementById('invoiceDate').value
      ? new Date(document.getElementById('invoiceDate').value + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
      : '—';
  const cn = document.getElementById('clientName').value.trim();
  document.getElementById('previewClient').querySelector('strong').textContent = cn || '—';

  // Totals
  document.getElementById('summarySubtotal').textContent = formatMoney(t.subtotalRaw, t.symbol);
  document.getElementById('summaryTax').textContent = formatMoney(t.taxAmount, t.symbol);
  document.getElementById('summaryTotal').textContent = formatMoney(t.total, t.symbol);
  document.getElementById('taxLabel').textContent = `IVA (${t.taxRate}%)`;

  const discRow = document.getElementById('discountRow');
  if (t.globalDisc > 0) {
    discRow.style.display = 'flex';
    document.getElementById('summaryDiscount').textContent = `−${formatMoney(t.discountAmount, t.symbol)}`;
  } else {
    discRow.style.display = 'none';
  }

  // Items preview
  const preview = document.getElementById('summaryItemsPreview');
  const validProds = products.filter(p => p.name);
  if (validProds.length === 0) {
    preview.innerHTML = '<p class="empty-hint">Añade productos para ver el resumen →</p>';
  } else {
    preview.innerHTML = validProds.map(p => `
      <div class="preview-item">
        <span class="preview-item-name">${escHtml(p.name)} <span style="opacity:.5">×${p.qty}</span></span>
        <span class="preview-item-amount">${formatMoney(p.lineTotal, t.symbol)}</span>
      </div>`).join('');
  }
}

// ── VALIDATION ────────────────────────────────────
function validateForm() {
  const required = [
    { id: 'invoiceNumber', label: 'Nº Factura' },
    { id: 'invoiceDate', label: 'Fecha' },
    { id: 'senderName', label: 'Nombre del emisor' },
    { id: 'clientName', label: 'Nombre del cliente' },
    { id: 'clientEmail', label: 'Email del cliente' },
    { id: 'clientAddress', label: 'Dirección del cliente' },
  ];

  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.field-input.error').forEach(el => el.classList.remove('error'));

  required.forEach(({ id, label }) => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add('error');
      const errEl = document.getElementById(`err-${id}`);
      if (errEl) errEl.textContent = `${label} es obligatorio.`;
      valid = false;
    }
  });

  // Email validation
  const emailEl = document.getElementById('clientEmail');
  if (emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.classList.add('error');
    document.getElementById('err-clientEmail').textContent = 'Email no válido.';
    valid = false;
  }

  // At least one product with name
  const products = getProducts();
  if (!products.some(p => p.name)) {
    showToast('Añade al menos un producto con descripción.', 'error');
    valid = false;
  }

  if (!valid) showToast('Corrige los errores antes de generar el PDF.', 'error');
  return valid;
}

// ── PDF BUILDER ───────────────────────────────────
function buildPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4', putOnlyUsedFonts: true });

  const products = getProducts().filter(p => p.name);
  const t = calcTotals(products);

  // ── Gather data ──
  const invoiceNum = document.getElementById('invoiceNumber').value;
  const invoiceDate = document.getElementById('invoiceDate').value;
  const dueDate = document.getElementById('dueDate').value;
  const senderName = document.getElementById('senderName').value;
  const senderCif = document.getElementById('senderCif').value;
  const senderEmail = document.getElementById('senderEmail').value;
  const senderPhone = document.getElementById('senderPhone').value;
  const senderAddr = document.getElementById('senderAddress').value;
  const senderWeb = document.getElementById('senderWeb').value;
  const clientName = document.getElementById('clientName').value;
  const clientEmail = document.getElementById('clientEmail').value;
  const clientAddr = document.getElementById('clientAddress').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const clientCif = document.getElementById('clientCif').value;
  const notes = document.getElementById('notes').value;
  const currency = document.getElementById('currency').value;

  const fmtDate = str => str
    ? new Date(str + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : '—';

  // ── Page dimensions ──
  const W = 210, H = 297;
  const ml = 15, mr = 15;
  const contentW = W - ml - mr;

  // ── HEADER BACKGROUND ──
  doc.setFillColor(15, 31, 61);
  doc.rect(0, 0, W, 48, 'F');

  // ── LOGO ──
  if (logoDataURL) {
    doc.addImage(logoDataURL, 'PNG', ml, 7, 30, 30);
  }

  // ── COMPANY NAME IN HEADER ──
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text(senderName, ml + (logoDataURL ? 34 : 0), 19);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(144, 184, 232);
  const senderLines = [senderAddr, senderEmail, senderPhone, senderWeb].filter(Boolean);
  senderLines.forEach((line, i) => doc.text(line, ml + (logoDataURL ? 34 : 0), 25 + i * 4.5));

  // ── INVOICE TITLE ──
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(212, 170, 78);
  doc.text('FACTURA', W - mr, 19, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 215, 240);
  doc.text(invoiceNum, W - mr, 27, { align: 'right' });

  doc.setFontSize(8);
  doc.setTextColor(144, 184, 232);
  doc.text(`Fecha: ${fmtDate(invoiceDate)}`, W - mr, 33, { align: 'right' });
  if (dueDate) doc.text(`Vencimiento: ${fmtDate(dueDate)}`, W - mr, 38, { align: 'right' });

  // ── CUSTOMER BLOCK ──
  let y = 58;
  const colLeft = ml;
  const colRight = ml + contentW / 2 + 5;

  // Left: bill to
  doc.setFillColor(244, 248, 255);
  doc.roundedRect(colLeft, y, contentW / 2 - 5, 40, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(138, 160, 188);
  doc.text('FACTURAR A', colLeft + 5, y + 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 31, 61);
  doc.text(clientName, colLeft + 5, y + 13);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(74, 96, 128);
  const clientLines = [clientCif, clientAddr, clientEmail, clientPhone].filter(Boolean);
  clientLines.forEach((line, i) => {
    const wrapped = doc.splitTextToSize(line, contentW / 2 - 15);
    doc.text(wrapped, colLeft + 5, y + 19 + i * 5);
  });

  // Right: invoice meta
  doc.setFillColor(244, 248, 255);
  doc.roundedRect(colRight, y, contentW / 2 - 5, 40, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(138, 160, 188);
  doc.text('DETALLES', colRight + 5, y + 6);

  const metaRows = [
    ['Nº Factura:', invoiceNum],
    ['Fecha emisión:', fmtDate(invoiceDate)],
    ['Vencimiento:', dueDate ? fmtDate(dueDate) : '—'],
    ['Moneda:', currency],
  ];

  metaRows.forEach(([label, value], i) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(74, 96, 128);
    doc.text(label, colRight + 5, y + 13 + i * 6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 31, 61);
    doc.text(value, colRight + 50, y + 13 + i * 6.5, { align: 'right' });
  });

  // ── PRODUCTS TABLE ──
  y += 48;

  const tableColumns = ['#', 'Descripción', 'Cant.', 'P. Unit.', 'Dto. %', 'Total'];
  const tableRows = products.map((p, i) => [
    `${i + 1}`,
    p.name,
    `${p.qty}`,
    formatMoney(p.price, t.symbol),
    p.disc > 0 ? `${p.disc}%` : '—',
    formatMoney(p.lineTotal, t.symbol),
  ]);

  doc.autoTable({
    head: [tableColumns],
    body: tableRows,
    startY: y,
    margin: { left: ml, right: mr },
    styles: {
      font: 'helvetica',
      fontSize: 9,
      cellPadding: { top: 4, bottom: 4, left: 4, right: 4 },
    },
    headStyles: {
      fillColor: [15, 31, 61],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8,
      halign: 'center',
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 10 },
      1: { halign: 'left' },
      2: { halign: 'center', cellWidth: 18 },
      3: { halign: 'right', cellWidth: 28 },
      4: { halign: 'center', cellWidth: 18 },
      5: { halign: 'right', cellWidth: 28, fontStyle: 'bold' },
    },
    alternateRowStyles: { fillColor: [248, 250, 253] },
    didDrawPage: (data) => {
      // Footer on each page
      addPageFooter(doc, data.pageNumber, doc.internal.getNumberOfPages(), senderName, W, H);
    },
  });

  // ── TOTALS BLOCK ──
  const afterTable = doc.lastAutoTable.finalY + 8;
  const totalsX = W - mr - 75;
  const totalsW = 75;

  const totalRows = [
    ['Subtotal', formatMoney(t.subtotalRaw, t.symbol)],
  ];
  if (t.globalDisc > 0) totalRows.push([`Descuento (${t.globalDisc}%)`, `−${formatMoney(t.discountAmount, t.symbol)}`]);
  totalRows.push([`IVA (${t.taxRate}%)`, formatMoney(t.taxAmount, t.symbol)]);

  doc.setDrawColor(220, 230, 240);
  doc.setLineWidth(0.3);

  totalRows.forEach(([label, value], i) => {
    const ty = afterTable + i * 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(74, 96, 128);
    doc.text(label, totalsX, ty);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 31, 61);
    doc.text(value, W - mr, ty, { align: 'right' });
  });

  // Total final
  const finalY = afterTable + totalRows.length * 7 + 2;
  doc.setFillColor(15, 31, 61);
  doc.roundedRect(totalsX - 5, finalY - 6, totalsW + 5, 12, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(212, 170, 78);
  doc.text('TOTAL', totalsX, finalY + 1.5);
  doc.text(formatMoney(t.total, t.symbol), W - mr - 2, finalY + 1.5, { align: 'right' });

  // ── NOTES ──
  if (notes.trim()) {
    const notesY = finalY + 18;
    doc.setFillColor(244, 248, 255);
    doc.roundedRect(ml, notesY, contentW, 1, 1, 1, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(138, 160, 188);
    doc.text('NOTAS Y CONDICIONES DE PAGO', ml, notesY + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(74, 96, 128);
    const notesLines = doc.splitTextToSize(notes, contentW - 10);
    doc.text(notesLines, ml, notesY + 14);
  }

  return doc;
}

function addPageFooter(doc, pageNum, totalPages, company, W, H) {
  doc.setDrawColor(220, 230, 240);
  doc.setLineWidth(0.3);
  doc.line(15, H - 14, W - 15, H - 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(138, 160, 188);
  doc.text(company, 15, H - 8);
  doc.text(`Página ${pageNum} de ${totalPages}`, W / 2, H - 8, { align: 'center' });
  doc.text('Generado con FacturaPro', W - 15, H - 8, { align: 'right' });
}

// ── GENERATE & DOWNLOAD (VERSIÓN CORREGIDA) ───────────────────────────
async function generatePDF() {
  if (!validateForm()) return;

  // Mostrar indicador de carga
  document.getElementById('loadingOverlay').style.display = 'flex';

  try {
    // Pequeña pausa para asegurar que la UI se renderice
    await new Promise(r => setTimeout(r, 100));

    // Construir el PDF
    const doc = buildPDF();

    // Obtener nombre del archivo
    const invoiceNum = document.getElementById('invoiceNumber').value || 'factura';
    const fileName = `${invoiceNum}.pdf`;

    // DESCARGA DIRECTA (Sin iframes, sin print(), sin blob URLs complejos)
    // Esto funciona nativamente en todos los navegadores modernos
    doc.save(fileName);

    showToast(`✅ Factura "${fileName}" descargada correctamente.`, 'success');

  } catch (err) {
    console.error("Error generando PDF:", err);
    showToast('❌ Error crítico al generar el PDF. Revisa la consola (F12).', 'error');
  } finally {
    // Ocultar indicador de carga
    document.getElementById('loadingOverlay').style.display = 'none';
  }
}
// ── PREVIEW ───────────────────────────────────────
async function previewPDF() {
  if (!validateForm()) return;

  document.getElementById('loadingOverlay').style.display = 'flex';

  try {
    await new Promise(r => setTimeout(r, 80));
    const doc = buildPDF();
    // Appending #toolbar=0 removes Chrome's toolbar (hiding Google Drive & native download buttons)
    const blobURL = doc.output('bloburl') + '#toolbar=0';
    const iframe = document.getElementById('pdfIframe');
    const placeholder = document.getElementById('previewPlaceholder');
    iframe.src = blobURL;
    iframe.style.display = 'block';
    placeholder.style.display = 'none';
    showToast('Vista previa lista.', 'info');
    iframe.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (err) {
    console.error(err);
    showToast('Error al generar la vista previa.', 'error');
  } finally {
    document.getElementById('loadingOverlay').style.display = 'none';
  }
}

// ── CLEAR FORM ────────────────────────────────────
function clearForm() {
  if (!confirm('¿Limpiar todo el formulario? Se perderán los datos introducidos.')) return;
  document.getElementById('invoiceForm').reset();
  document.getElementById('productsContainer').innerHTML = '';
  productRowCount = 0;
  addProductRow();
  addProductRow();
  setDefaultDates();
  document.getElementById('taxBadge').textContent = '21%';
  document.getElementById('pdfIframe').style.display = 'none';
  document.getElementById('previewPlaceholder').style.display = 'flex';
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.field-input.error').forEach(el => el.classList.remove('error'));
  updateSummary();
  showToast('Formulario limpiado.', 'info');
}

// ── TOAST ─────────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 280);
  }, 3500);
}

// ── UTILS ─────────────────────────────────────────
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
