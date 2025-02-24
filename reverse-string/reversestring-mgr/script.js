// Función para invertir una cadena
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const invertBtn = document.getElementById('invertBtn');
const result = document.getElementById('result');

// Actualiza el resultado en tiempo real
inputText.addEventListener('input', () => {
  const text = inputText.value;
  
  // Mostrar el botón solo si hay más de 3 caracteres
  if (text.length > 3) {
    invertBtn.classList.remove('hidden');
    result.textContent = reverseString(text);
  } else {
    invertBtn.classList.add('hidden');
    result.textContent = text ? 'Ingresa al menos 4 letras.' : '';
  }
});

// Opcional: al hacer clic en el botón, se refresca el resultado (aunque ya se muestra en tiempo real)
invertBtn.addEventListener('click', () => {
  const text = inputText.value;
  result.textContent = reverseString(text);
});
