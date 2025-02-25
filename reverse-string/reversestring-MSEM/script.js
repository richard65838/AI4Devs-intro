const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const reverseButton = document.getElementById('reverseButton');
const autoButton = document.getElementById('autoButton');
const copyButton = document.getElementById('copyButton');
let autoMode = false;
let interval;

// Función para invertir el texto
function reverseString(text) {
    return text.split('').reverse().join('');
}

// Evento del botón Reverse
reverseButton.addEventListener('click', () => {
    result.textContent = reverseString(inputText.value);
});

// Evento del botón Automático
autoButton.addEventListener('click', () => {
    autoMode = !autoMode;
    autoButton.textContent = autoMode ? 'Detener Automático' : 'Automático';

    if (autoMode) {
        interval = setInterval(() => {
            result.textContent = reverseString(inputText.value);
        }, 500);
    } else {
        clearInterval(interval);
    }
});

// Evento del botón Copiar
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(result.textContent)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => alert('Error al copiar el texto'));
});
