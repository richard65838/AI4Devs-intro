/**
 * Función principal para invertir el texto ingresado por el usuario
 * Obtiene el texto del input, lo invierte y muestra el resultado
 */
function invertText() {
    const inputText = document.getElementById('inputText');
    const resultSpan = document.getElementById('result');
    const invertButton = document.getElementById('invertButton');
    
    // Validar que haya texto ingresado
    if (!inputText.value.trim()) {
        resultSpan.textContent = 'Por favor, ingresa algún texto';
        resultSpan.classList.add('error');
        invertButton.classList.add('hidden');
        return;
    }
    
    // Invertir el texto y mostrar resultado
    const textoInvertido = invertirCadena(inputText.value);
    resultSpan.textContent = textoInvertido;
    resultSpan.classList.remove('error');
}

/**
 * Función pura que recibe una cadena y devuelve su versión invertida
 * @param {string} texto - Texto a invertir
 * @returns {string} - Texto invertido
 */
function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

// Manejar la entrada de texto en tiempo real
document.getElementById('inputText').addEventListener('input', function(event) {
    const texto = event.target.value;
    const invertButton = document.getElementById('invertButton');
    
    // Mostrar/ocultar botón según longitud del texto
    if (texto.length > 3) {
        invertButton.classList.remove('hidden');
    } else {
        invertButton.classList.add('hidden');
    }
    
    // Invertir texto en tiempo real
    invertText();
});

// Agregar evento para invertir al presionar Enter
document.getElementById('inputText').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        invertText();
    }
});

// Limpiar mensaje de error cuando el usuario empiece a escribir
document.getElementById('inputText').addEventListener('input', function() {
    const resultSpan = document.getElementById('result');
    resultSpan.classList.remove('error');
});
