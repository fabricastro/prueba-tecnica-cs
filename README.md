# Customer Scoops Prueba Técnica - Encuesta Interactiva

Este proyecto es una aplicación web para realizar encuestas interactivas y recolectar información de los usuarios de manera amigable y visualmente atractiva. La aplicación está desarrollada en React y utiliza Context API para manejar el estado global de la encuesta, así como estilos responsivos para adaptarse a diferentes dispositivos.

## Demo

Puedes ver una demo de la aplicación en [link_a_la_demo](https://customerscoopschallenge.vercel.app/).

## Características

- **Encuesta Interactiva**: Navegación paso a paso para recolectar datos de los usuarios.
- **Cambio de fondo adaptativo**: El fondo de la aplicación cambia según el estado de la encuesta, solo en dispositivos de escritorio.
- **Context API**: Manejo de estado global para la encuesta, incluyendo preguntas, respuestas y pasos.
- **Estilos Responsivos**: Adaptación visual para pantallas de escritorio y dispositivos móviles.
- **Opciones con Chips**: Se muestran opciones con chips alfabéticos en preguntas específicas.
- **Validación de Respuestas**: Previene la navegación sin que el usuario seleccione una opción o complete los datos requeridos.

## Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/fabricastro/prueba-tecnica-cs.git
   cd prueba-tecnica-cs

2. **Instalar las dependencias:**
   npm install

3. **Ejecutar el proyecto:**
npm run dev

## Descripción del Enfoque

La aplicación se ha desarrollado dividiendo el diseño en componentes reutilizables, siguiendo un enfoque modular. Se ha implementado un diseño responsive, priorizando un enfoque mobile first. Además, se ha añadido la funcionalidad de navegación en el formulario con el almacenamiento de respuestas.

