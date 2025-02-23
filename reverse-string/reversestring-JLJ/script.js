const inputString = document.getElementById('inputString');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const result = document.getElementById('result');

// Evento para el botón de "Reverse"
reverseBtn.addEventListener('click', () => {
  const text = inputString.value;
  // Revertimos el texto dividiéndolo en caracteres, invirtiendo el orden y uniéndolos
  const reversedText = text.split('').reverse().join('');
  result.textContent = reversedText;
});

// Evento para el botón de "Copy"
copyBtn.addEventListener('click', () => {
  const textToCopy = result.textContent;
  
  if (textToCopy.trim() !== "") {
    // Usamos la API de Clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch(err => {
        alert('Error al copiar el texto');
        console.error(err);
      });
  } else {
    alert('No hay texto para copiar');
  }
});