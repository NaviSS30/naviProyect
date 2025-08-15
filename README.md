Descripción del Proyecto

NorthSkate es una aplicación web de comercio electrónico especializada en la venta de skateboards y productos relacionados.
El sistema está desarrollado con React + Vite para el frontend, PHP 8.x para la capa de API backend y MySQL como sistema de gestión de base de datos.

El proyecto se ha desplegado en InfinityFree utilizando su servicio de hosting gratuito, configurado de forma similar a un entorno local con XAMPP, pero adaptado a las limitaciones y estructura del servidor remoto.

Arquitectura
Frontend

Framework: React 18 con Vite como bundler y servidor de desarrollo.

Funcionalidades:

Navegación de productos y categorías.

Página informativa y carrito de compras (Shopping Cart).

Diseño responsive y componentes reutilizables.

Consumo de API mediante fetch hacia el backend en PHP.

Backend (API)

Lenguaje: PHP 8.x.

Rol: Gestiona las solicitudes desde el frontend y se comunica con la base de datos MySQL.

Endpoints:

Obtención de productos y categorías.

Gestión de clientes destacados.

Registro y eliminación de usuarios.

Base de Datos

Motor: MySQL (proporcionado por InfinityFree).

Estructura: Tablas para productos, categorías y clientes.

Hosting

Proveedor: InfinityFree (entorno compartido con SSL y limitaciones del plan gratuito).

Estructura de Archivos:

htdocs/ → Contenido estático del frontend (build de Vite).

htdocs/api/ → Archivos PHP (endpoints).

Conexión MySQL: Uso del host, usuario, contraseña y nombre de base de datos provistos por InfinityFree (no localhost).

Funcionalidades Clave

Catálogo y categorías: Listado y navegación de productos por categoría.

Clientes Destacados:

Muestra los usuarios registrados.

Desde este apartado es posible eliminar clientes registrados (acción que invoca el endpoint correspondiente y actualiza la vista).

Registro de usuarios:

Botón “Registrarse” totalmente funcional que crea nuevos usuarios en la base de datos a través de la API PHP.

Los usuarios registrados aparecen automáticamente en Clientes Destacados.

Carrito de compras:

Interfaz de shopping cart integrada en la navegación principal.

Estado Actual (Producción)

URL: https://northskate.infinityfree.me/

Enlaces activos en el footer: Inicio, Productos, Categorías, Clientes Destacados, Nosotros, Carrito.