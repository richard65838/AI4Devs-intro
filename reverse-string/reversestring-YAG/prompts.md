
# Prompts & Chatbot Used

**Chatbot Utilizado:** ChatGPT (versión GPT-4)

---

## Prompt 1
> *"Hola ChatGPT, necesito una guía para crear una página web en modo oscuro que invierta un string, usando JavaScript y un estilo inspirado en TailwindCSS. También quiero la opción de que el texto se invierta en tiempo real y se muestre un botón solo si el texto tiene más de 3 caracteres."*

### Resumen de la Respuesta
El asistente proporcionó un ejemplo de `index.html` y un `script.js` que invertía el string con una función pura, aplicaba estilos “Tailwind-like” en modo oscuro y ofrecía la inversión en tiempo real. También incluyó comentarios sobre el uso de `Array.from()` para manejar correctamente caracteres Unicode y la manipulación del DOM.

---

## Prompt 2
> *"Ahora quiero que incluyas un modo claro (light mode) con un checkbox para alternar entre light/dark mode. Además, cambia el título dinámicamente para indicar el modo actual y muestra un emoji de sol (☀) o luna (🌙) según corresponda."*

### Resumen de la Respuesta
El asistente ajustó la solución anterior para alternar entre `.light-mode` y el modo oscuro por defecto. Sugirió usar variables CSS para los colores y sobreescribirlas al añadir o remover la clase `.light-mode`. También mostró cómo cambiar el contenido de un elemento `<h1>` para reflejar el modo actual y los emojis.

---

## Prompt 3
> *"Agrega un footer centrado que diga: 'Desarrollado por @YobertyAlej' con un enlace a mi perfil de LinkedIn. Quiero que el footer se vea al final de la página y que se mantenga el enfoque visual de TailwindCSS."*

### Resumen de la Respuesta
El asistente incluyó un `<footer>` centrado al final, con un enlace a LinkedIn y estilos “Tailwind-like” (colores, tipografía, etc.). Explicó cómo crear un “sticky footer” mediante flexbox, de modo que, si el contenido de la página es corto, el footer permanezca en la parte inferior de la ventana, y si el contenido es largo, se muestre al final del contenido.

---

## Prompt 4
> *"Finalmente, quiero que me entregues un archivo `prompts.md` con todos los prompts usados y las explicaciones relevantes"*

### Resumen de la Respuesta
El asistente compiló los prompts y las respuestas en un archivo `.md`, describiendo cada iteración y su resultado sin incluir el código original provisto por el usuario.

**Fin del archivo de prompts**  
