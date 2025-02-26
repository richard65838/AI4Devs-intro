/**
 * Invierte la cadena introducida en el input "originalText" y
 * muestra el resultado en el input "reversedText", solo si la
 * longitud del string es >= 3.
 */
function reverseText() {
  const originalTextElement = document.getElementById('originalText');
  const reversedTextElement = document.getElementById('reversedText');
  const originalText = originalTextElement.value || '';

  if (originalText.length < 3) {
    reversedTextElement.value = '';
    return;
  }

  const reversed = originalText.split('').reverse().join('');
  reversedTextElement.value = reversed;
}

/**
 * NUEVA FUNCIÓN PARA COPIAR AL PORTAPAPELES
 */
function copyReversedText() {
  const reversedTextElement = document.getElementById('reversedText');
  const textToCopy = reversedTextElement.value;

  if (textToCopy.trim().length === 0) {
    // Si no hay nada que copiar, podríamos mostrar un alert o simplemente retornar
    alert("No hay texto suficiente para copiar.");
    return;
  }

  // Usamos la API del portapapeles
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Texto copiado al portapapeles.");
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
      alert("No se pudo copiar el texto. Revisa tu navegador.");
    });
}

/**
 * Manejo de eventos al cargar el DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  // Si deseamos que el texto se invierta con cada tecla,
  // ya tenemos oninput en el index.html -> reverseText()

  // Escuchamos el click del botón COPY
  const copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', copyReversedText);
});

