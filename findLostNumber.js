/**
   Este script demuestra dos enfoques:
   1. Caso simple: Un solo número faltante en una serie 1..N (Fórmula de Gauss).
   2. Caso general: Múltiples números faltantes, rango arbitrario, array desordenado.
*/

// ---------------------------------------------------------------
// PARTE 1: CASO SIMPLE (Un solo número faltante, serie 1..N)
// ---------------------------------------------------------------
console.log("--- CASO 1: Serie 1 al 10 (Falta un número) ---");

const arrSimple = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// Calculamos n como la longitud + 1 (asumiendo que la serie completa iba hasta 10)
const n = arrSimple.length + 1;

// Fórmula de Gauss: Suma de 1 a n = n * (n + 1) / 2
const totalEsperado = n * (n + 1) / 2;

// Suma real de los elementos presentes
const sumaReal = arrSimple.reduce((a, b) => a + b, 0);

// La diferencia es el número faltante
const numeroFaltante = totalEsperado - sumaReal;

console.log(`Array: [${arrSimple.join(', ')}]`);
console.log(`Número faltante: ${numeroFaltante}`); // Salida: 5


// ---------------------------------------------------------------
// PARTE 2: CASO GENERAL (Múltiples faltantes, rango arbitrario)
// ---------------------------------------------------------------
console.log("\n--- CASO 2: Rango arbitrario (Múltiples faltantes) ---");

// Array desordenado con múltiples huecos y que no empieza por 1
const arrGeneral = [15, 3, 7, 4, 12, 6, 11, 10];
// Secuencia esperada: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// Faltan: 5, 8, 9, 13, 14

function encontrarFaltantes(arr, minForzado = null, maxForzado = null) {
    if (arr.length === 0) return [];

    // 1. Determinar el rango (min y max)
    // Si no se pasan valores forzados, calculamos el min y max del array actual.
    // Esto funciona incluso si el array está desordenado.
    const min = minForzado !== null ? minForzado : Math.min(...arr);
    const max = maxForzado !== null ? maxForzado : Math.max(...arr);

    // 2. Crear un Set para búsqueda rápida O(1)
    // Esto evita tener que ordenar el array (O(n log n))
    const existentes = new Set(arr);

    const faltantes = [];

    // 3. Iterar desde el mínimo hasta el máximo y buscar los huecos
    for (let i = min; i <= max; i++) {
        if (!existentes.has(i)) {
            faltantes.push(i);
        }
    }

    return faltantes;
}

// Ejecutar la función para el caso general
const resultados = encontrarFaltantes(arrGeneral);

console.log(`Array original (desordenado): [${arrGeneral.join(', ')}]`);
console.log(`Rango detectado: ${Math.min(...arrGeneral)} a ${Math.max(...arrGeneral)}`);
console.log(`Números faltantes: [${resultados.join(', ')}]`);


// ---------------------------------------------------------------
// BONUS: Caso con rango forzado externo
// ---------------------------------------------------------------
console.log("\n--- CASO 3: Rango forzado externo (ej. del 1 al 20) ---");

// Aunque el array solo tenga del 3 al 15, podemos pedir que busque del 1 al 20
const resultadosExternos = encontrarFaltantes(arrGeneral, 1, 20);

console.log(`Buscando en rango 1-20...`);
console.log(`Faltantes (incluyendo extremos): [${resultadosExternos.join(', ')}]`);
// Salida incluirá: 1, 2, 5, 8, 9, 13, 14, 16, 17, 18, 19, 20

/**
 * FUNCIÓN DE ALTO RENDIMIENTO PARA ENCONTRAR FALTANTES
 * 
 * Escenario ideal: Arrays grandes (10k+ elementos) o rangos muy amplios.
 * Estrategia: Ordenar una vez (O(n log n)) y luego recorrer linealmente (O(n)).
 * Evita crear Sets gigantes o iterar sobre rangos vacíos enormes.
 */
function encontrarFaltantesCritico(arr) {
    if (arr.length === 0) return [];

    // 1. Copia y ordenar (O(n log n))
    // Es mejor ordenar una vez que iterar sobre un rango gigante.
    // Usamos sort numérico explícito.
    const sorted = [...arr].sort((a, b) => a - b);

    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const faltantes = [];

    // 2. Recorrer el array ordenado (O(n))
    // Comparamos cada elemento con el siguiente para detectar saltos.
    // Esto es mucho más rápido que iterar de min a max si hay muchos huecos.
    for (let i = 0; i < sorted.length - 1; i++) {
        const current = sorted[i];
        const next = sorted[i + 1];

        // Si la diferencia es > 1, hay números faltantes entre current y next
        if (next - current > 1) {
            // Generamos solo los números faltantes entre esos dos puntos
            // Esto evita iterar sobre todo el rango global si no es necesario
            for (let num = current + 1; num < next; num++) {
                faltantes.push(num);
            }
        }
    }

    return faltantes;
}

// --- PRUEBAS DE RENDIMIENTO ---

// Caso A: Array grande y desordenado (1 millón de números, faltan algunos)
// Generamos un array de prueba rápido
const bigArray = [];
for (let i = 1; i <= 100000; i++) {
    if (i !== 5000 && i !== 5001 && i !== 99999) { // Quitamos algunos
        bigArray.push(i);
    }
}
// Mezclamos para simular desorden
bigArray.sort(() => Math.random() - 0.5);

console.time("Rendimiento Crítico");
const resultBig = encontrarFaltantesCritico(bigArray);
console.timeEnd("Rendimiento Crítico");

console.log(`Array de ${bigArray.length} elementos.`);
console.log(`Faltantes encontrados:`, resultBig.slice(0, 5), "... (total: ${resultBig.length})");

// Caso B: Rango gigante pero pocos elementos (Ej: [1, 1000000])
// Aquí el método anterior (iterar min->max) fallaría, pero este NO.
const sparseArray = [1, 1000000];
console.time("Rango Gigante");
const resultSparse = encontrarFaltantesCritico(sparseArray);
console.timeEnd("Rango Gigante");
console.log(`Faltantes en rango 1-1M: Se encontraron ${resultSparse.length} números (solo se iteró lo necesario).`);