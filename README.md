# ☁️ CloudVibes E-commerce

![Project Status](https://img.shields.io/badge/status-active-success)
![React](https://img.shields.io/badge/React-v18-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-38bdf8)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange)

**CloudVibes** es una plataforma de comercio electrónico SPA (Single Page Application) especializada en videojuegos. Desarrollada con el ecosistema de **React** y estilizada con **Tailwind CSS**, integra una arquitectura *serverless* mediante **Firebase** para la gestión de datos en tiempo real y persistencia de stock.

---

## 🚀 Stack Tecnológico

La arquitectura del proyecto se basa en tecnologías modernas para asegurar rendimiento y escalabilidad:

| Categoría | Tecnología | Uso Principal |
| :--- | :--- | :--- |
| **Core** | React JS (Vite) | Construcción de interfaz y gestión de estado. |
| **Estilos** | Tailwind CSS v3 | Diseño responsivo y sistema de diseño atómico. |
| **Backend / DB** | Firebase Firestore | Base de datos para productos y órdenes. |
| **Iconografía** | Lucide React / Heroicons | Componentes visuales SVG optimizados. |

---

## 🛠️ Funcionalidades e Implementación Técnica

El proyecto abarca un flujo completo de E-commerce, destacando las siguientes implementaciones lógicas y de UI:

### 1. Navegación y Catálogo
* **Enrutamiento Dinámico:** Despliegue de productos filtrados por categorías.
* **Manejo de Estados de Carga:** Animaciones y UI de respuesta (Empty States) para rutas inexistentes o tiempos de carga.

### 2. Gestión de Producto (PDP)
* **Vista de Detalle:** Renderizado de información extendida del SKU seleccionado.
* **Lógica de UI Condicional:** Implementación de contador de ítems inteligente. 
    * *Detalle UX:* Transformación visual del botón de decremento a un icono de "papelera" (trash icon) cuando la cantidad es igual a 1, mejorando la semántica de la acción "eliminar".

### 3. Sincronización de Datos (Firestore)
* **Control de Stock en Tiempo Real:** * Validación de stock disponible antes de añadir al carrito.
    * **Actualización Atómica:** Descuento automático del inventario en la base de datos (DB) tras la confirmación de compra, asegurando consistencia entre la UI y el Backend.
* **Generación de Órdenes:** Formulario de checkout conectado directamente a colecciones de Firestore para el registro.

---

## 💻 Instalación y Despliegue Local

Sigue estos pasos para levantar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/edwinmoises10/CloudVibes.git](https://github.com/edwinmoises10/CloudVibes.git)