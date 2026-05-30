/**
 * Nexus Tasks - Minimalist Kanban Board
 * Pure Vanilla JSImplementation
 */

// State
let tasks = [];

// DOM Elements
const btnAddTask = document.getElementById('btn-add-task');
const btnClearBoard = document.getElementById('btn-clear-board');
const modal = document.getElementById('task-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancel = document.getElementById('btn-cancel');
const taskForm = document.getElementById('task-form');
const btnDeleteTask = document.getElementById('btn-delete-task');
const modalTitle = document.getElementById('modal-title');

// Inputs
const inputId = document.getElementById('task-id');
const inputTitle = document.getElementById('task-title');
const inputDesc = document.getElementById('task-desc');
const inputStatus = document.getElementById('task-status');

// Columns
const columns = document.querySelectorAll('.column');
const lists = {
    'todo': document.getElementById('list-todo'),
    'inprogress': document.getElementById('list-inprogress'),
    'done': document.getElementById('list-done')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderBoard();
    setupEventListeners();
});

// --- State Management ---
/**
 * Carga las tareas desde el almacenamiento local (localStorage).
 * Si no hay datos previos o el formato es inválido, inicializa el estado como vacío.
 */
function loadTasks() {
    const saved = localStorage.getItem('nexus_tasks');
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch (e) {
            tasks = [];
        }
    }
}

/**
 * Guarda el estado actual de las tareas en localStorage y actualiza los contadores visuales.
 */
function saveTasks() {
    localStorage.setItem('nexus_tasks', JSON.stringify(tasks));
    updateCounts();
}

// --- Rendering ---
/**
 * Limpia las listas del DOM y renderiza cada tarea en su columna correspondiente.
 */
function renderBoard() {
    // Clear lists
    Object.values(lists).forEach(list => list.innerHTML = '');
    
    // Render tasks
    tasks.forEach(task => {
        const card = createTaskCard(task);
        if (lists[task.status]) {
            lists[task.status].appendChild(card);
        } else {
            // fallback
            task.status = 'todo';
            lists['todo'].appendChild(card);
        }
    });
    
    updateCounts();
}

function updateCounts() {
    const counts = { todo: 0, inprogress: 0, done: 0 };
    tasks.forEach(task => {
        if(counts[task.status] !== undefined) counts[task.status]++;
    });
    
    document.querySelector('#col-todo .task-count').textContent = counts.todo;
    document.querySelector('#col-inprogress .task-count').textContent = counts.inprogress;
    document.querySelector('#col-done .task-count').textContent = counts.done;
}

/**
 * Crea el elemento DOM de una tarjeta de tarea con sus eventos de drag y click.
 * @param {Object} task - Objeto con los datos de la tarea (id, title, description, status).
 * @returns {HTMLElement} El nodo de la tarjeta de tarea.
 */
function createTaskCard(task) {
    const div = document.createElement('div');
    div.className = 'task-card';
    div.draggable = true;
    div.dataset.id = task.id;
    
    const title = document.createElement('h4');
    title.className = 'task-title';
    title.textContent = task.title;
    
    const desc = document.createElement('p');
    desc.className = 'task-desc';
    desc.textContent = task.description;
    
    div.appendChild(title);
    if (task.description) {
        div.appendChild(desc);
    }
    
    // Drag Events
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragend', handleDragEnd);
    
    // Click Event (Edit)
    div.addEventListener('click', () => openModal(task));
    
    return div;
}

// --- Drag & Drop ---
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id); // Required for Firefox
}

function handleDragEnd() {
    this.classList.remove('dragging');
    draggedItem = null;
    
    columns.forEach(col => {
        const list = col.querySelector('.task-list');
        list.classList.remove('drag-over');
    });
}

// Setup Column Drop Zones
columns.forEach(col => {
    const list = col.querySelector('.task-list');
    const status = col.dataset.status;
    
    list.addEventListener('dragover', e => {
        e.preventDefault(); // Necessary to allow dropping
        list.classList.add('drag-over');
        
        // Determine position for visual sorting
        const afterElement = getDragAfterElement(list, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (draggable) {
            if (afterElement == null) {
                list.appendChild(draggable);
            } else {
                list.insertBefore(draggable, afterElement);
            }
        }
    });
    
    list.addEventListener('dragleave', () => {
        list.classList.remove('drag-over');
    });
    
    list.addEventListener('drop', e => {
        e.preventDefault();
        list.classList.remove('drag-over');
        
        if (draggedItem) {
            const taskId = draggedItem.dataset.id;
            const newStatus = status;
            
            // Update state
            const taskIndex = tasks.findIndex(t => t.id === taskId);
            if (taskIndex > -1) {
                tasks[taskIndex].status = newStatus;
                
                // If we want to save order, we'd need to re-sort array based on DOM.
                // For simplicity, we just update status and save.
                saveTasks();
            }
        }
    });
});

// Helper for sorting during drag
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// --- Modal & Form Handling ---
function setupEventListeners() {
    btnAddTask.addEventListener('click', () => openModal());
    btnCloseModal.addEventListener('click', closeModal);
    btnCancel.addEventListener('click', closeModal);
    
    // Close modal clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    taskForm.addEventListener('submit', handleFormSubmit);
    btnDeleteTask.addEventListener('click', handleDeleteTask);
    
    btnClearBoard.addEventListener('click', handleClearBoard);
}

/**
 * Limpia todas las tareas del tablero tras la confirmación del usuario.
 */
function handleClearBoard() {
    if (confirm('¿Estás seguro de que quieres limpiar todo el tablero? Esta acción no se puede deshacer.')) {
        tasks = [];
        saveTasks();
        renderBoard();
    }
}

/**
 * Abre el modal para crear una nueva tarea o editar una existente.
 * @param {Object|null} task - Tarea a editar. Si es null, el modal se abre en modo creación.
 */
function openModal(task = null) {
    taskForm.reset();
    
    if (task) {
        // Edit Mode
        modalTitle.textContent = 'Editar Tarea';
        inputId.value = task.id;
        inputTitle.value = task.title;
        inputDesc.value = task.description;
        inputStatus.value = task.status;
        btnDeleteTask.classList.remove('hidden');
    } else {
        // Create Mode
        modalTitle.textContent = 'Nueva Tarea';
        inputId.value = '';
        inputStatus.value = 'todo'; // default
        btnDeleteTask.classList.add('hidden');
    }
    
    modal.classList.add('show');
    setTimeout(() => inputTitle.focus(), 100);
}

function closeModal() {
    modal.classList.remove('show');
}

/**
 * Procesa el envío del formulario de tareas.
 * Crea una nueva tarea o actualiza la existente basándose en el ID del input oculto.
 * @param {Event} e - Evento de submit.
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    const id = inputId.value;
    const title = inputTitle.value.trim();
    const description = inputDesc.value.trim();
    const status = inputStatus.value;
    
    if (!title) return;
    
    if (id) {
        // Update existing task
        const index = tasks.findIndex(t => t.id === id);
        if (index > -1) {
            tasks[index] = { ...tasks[index], title, description, status };
        }
    } else {
        // Create new task
        const newTask = {
            id: 'task_' + Date.now().toString(36) + Math.random().toString(36).substr(2),
            title,
            description,
            status,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
    }
    
    saveTasks();
    renderBoard();
    closeModal();
}

/**
 * Elimina la tarea cargada actualmente en el modal tras confirmar la acción.
 */
function handleDeleteTask() {
    const id = inputId.value;
    if (id) {
        if (confirm('¿Eliminar esta tarea?')) {
            tasks = tasks.filter(t => t.id !== id);
            saveTasks();
            renderBoard();
            closeModal();
        }
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getTasks: () => tasks,
        setTasks: (newTasks) => { tasks = newTasks; },
        loadTasks,
        saveTasks,
        renderBoard,
        handleFormSubmit,
        handleDeleteTask,
        handleClearBoard,
        setupEventListeners
    };
}
