# Nexus Tasks - Kanban Manager

Nexus Tasks es una aplicación de gestión de tareas tipo Kanban minimalista y moderna, construida con Vanilla JavaScript. Ofrece una experiencia fluida para organizar flujos de trabajo personales con una estética tecnológica innovadora.

## 🚀 Características

- **Tablero Kanban**: Organiza tus tareas en tres columnas: Pendiente, En progreso y Hecho.
- **Drag & Drop**: Mueve las tareas entre columnas de forma intuitiva arrastrándolas.
- **Gestión Completa (CRUD)**: Crea, edita y elimina tareas fácilmente mediante un modal interactivo.
- **Persistencia Local**: Tus tareas se guardan automáticamente en el navegador utilizando `localStorage`.
- **Estética Tecnológica**: Interfaz oscura con paleta de colores roja, negra y amarilla, diseñada para ofrecer una experiencia premium.
- **Pruebas Unitarias**: Lógica de negocio validada con Jest para asegurar estabilidad.

## 🛠️ Requisitos Técnicos

- **Navegador Moderno**: Soporte para HTML5, CSS3 y ES6.
- **Node.js** (Opcional): Necesario únicamente para ejecutar el conjunto de pruebas unitarias.

## 📦 Instalación y Uso

1. **Uso Directo**:
   Simplemente abre el archivo `index.html` en cualquier navegador moderno. No requiere servidor ni procesos de construcción.

2. **Entorno de Desarrollo y Pruebas**:
   Si deseas ejecutar las pruebas unitarias:
   ```bash
   # Instalar dependencias
   npm install

   # Ejecutar pruebas
   npm test
   ```

## 📂 Estructura del Proyecto

```text
task_manager/
├── __tests__/           # Pruebas unitarias con Jest
│   └── script.test.js   # Casos de prueba para la lógica de tareas
├── index.html           # Estructura principal de la aplicación
├── script.js            # Lógica de la aplicación, estados y eventos
├── styles.css           # Estilos personalizados (CSS3)
├── jest.config.js       # Configuración de Jest (JSDOM)
└── package.json         # Configuración de Node.js y dependencias
```

## 🧪 Pruebas Unitarias

El proyecto incluye pruebas automatizadas que verifican:
- Creación correcta de tareas (validación de campos).
- Actualización de estado y contenido.
- Eliminación de tareas y confirmaciones.
- Carga y guardado correcto en `localStorage`.

## 🎨 Diseño

La aplicación utiliza un sistema de diseño basado en:
- **Colores**: Rojo (`#FF3333`), Negro (`#050505`), Amarillo (`#FFD700`).
- **Tipografía**: Outfit (via Google Fonts).
- **Efectos**: Glassmorphism, degradados suaves y desenfoque ambiental.

---
Desarrollado con enfoque en simplicidad y potencia visual.
