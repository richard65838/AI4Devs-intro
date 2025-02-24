// Función para invertir una cadena
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const invertBtn = document.getElementById('invertBtn');
const result = document.getElementById('result');

// Evento al hacer clic en el botón
invertBtn.addEventListener('click', () => {
  const text = inputText.value;
  if (text.trim() !== '') {
    result.textContent = reverseString(text);
  } else {
    result.textContent = 'Por favor, ingresa una cadena de texto.';
  }
});
