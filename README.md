# CloudVibes E-commerce 🎸

Ecosistema de **React** y estilizada con **Tailwind CSS**.

## 🚀 Tecnologías

* **Core:** React JS (Vite)
* **Estilos:** Tailwind CSS v3
* **Iconos:** Lucide React / Heroicons
* **Despliegue:** GitHub Pages

---

## 🛠️ Implementación Técnica

El desarrollo actual se centra en la arquitectura de componentes fundamentales, aplicando principios de reutilización y separación de responsabilidades.

### 1. Componente Navbar (`<Navbar />`)
La barra de navegación actúa como el controlador principal de la interfaz de usuario.
* **Diseño de Layout:** Implementación de `Flexbox` con Tailwind para la distribución de elementos.
* **Integración:** Contiene la lógica de navegación y renderiza el componente `CartWidget` como hijo directo.


### 2. Componente CartWidget (`<CartWidget />`)
Componente encapsulado que representa el estado del carrito de compras.
* **Iconografía:** Implementación de gráficos vectoriales (SVG) para el ícono del carrito.

### 3. Componente ItemListContainer (`<ItemListContainer />`)
Contenedor lógico diseñado para la presentación de catálogos.
* **Manejo de Props:** Este componente implementa la recepción y renderizado de propiedades dinámicas (`props`). Actualmente recibe una prop `title` desde `App.jsx` para demostrar el flujo de datos unidireccional (Parent to Child).

---

## 🎨 Enfoque en Tailwind CSS

El diseño visual del proyecto abandona las hojas de estilo tradicionales (`.css`) en favor de un enfoque **Utility-First**.

---

## 📦 Instalación y Despliegue

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/edwinmoises10/cloudvibes-ecommerce.git](https://github.com/edwinmoises10/cloudvibes-ecommerce.git)
    ```

2.  **Instalar dependencias:**
    ```bash
    cd cloudvibes-ecommerce
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Ver en el navegador:**
    Abre `http://localhost:5173` para ver la aplicación.

---

Desarrollado por **Moises Oña** - Ingeniero Electrónico & Full Stack Developer en formación.