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
   ```bash
   npm install

3. **Ejecutar el proyecto:**
   ```bash
   npm run dev

4. **Abrir en el navegador**
   La aplicación estará disponible en http://localhost:5173.

## Descripción del Enfoque

La aplicación se ha desarrollado dividiendo el diseño en componentes reutilizables, siguiendo un enfoque modular. Se ha implementado un diseño responsive, priorizando un enfoque mobile first. Además, se ha añadido la funcionalidad de navegación en el formulario con el almacenamiento de respuestas.

## Uso de Context API

El proyecto usa Context API (SurveyContext) para manejar el estado global, como el paso actual, las respuestas, el nombre del usuario y el color de fondo en la última pantalla.
    
## Estilos y Responsividad

Los estilos están creados con styled-components. El diseño es "mobile-first", lo que significa que las pantallas se adaptan a dispositivos móviles primero y luego a pantallas más grandes usando @media.

El cambio de fondo de la pantalla final ocurre solo en dispositivos de escritorio.

## Componentes Principales

- Question: Controla el flujo de la encuesta, muestra preguntas y valida las respuestas.
- ProgressBar: Muestra el progreso actual de la encuesta.
- OptionList y OptionButton: Renderizan opciones con diferentes layouts (grid, column, etc.) y muestran un chip con letras alfabéticas en ciertas preguntas.
- SurveyContext: Almacena el estado de la encuesta y controla el color de fondo en la pantalla final.

## Envío de Correo

Se configuró la funcionalidad de envío de correo utilizando Node.js y Nodemailer, ya que las opciones alternativas (Resend y SendGrid) presentaron limitaciones (Resend no me dejaba enviar mail a terceros y sendgrid no me habilito mi cuenta). Nodemailer permite enviar el template maquetado al destinatario especificado al igual que otras librerias.

