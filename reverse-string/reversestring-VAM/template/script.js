const textoInput = document.getElementById('textoInput');
const resultado = document.getElementById('resultado');
const botonInvertir = document.getElementById('invertirBtn');

// Función para invertir el texto
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

// Función para actualizar la visibilidad del botón
function actualizarBoton(texto) {
    if (texto.length >= 3) {
        botonInvertir.style.display = 'inline-block';
    } else {
        botonInvertir.style.display = 'none';
    }
}

// Evento para actualizar en tiempo real
textoInput.addEventListener('input', function(e) {
    const texto = e.target.value;
    resultado.textContent = invertirTexto(texto);
    actualizarBoton(texto);
});

// Evento para el botón (ahora es opcional ya que la inversión es en tiempo real)
botonInvertir.addEventListener('click', function() {
    textoInput.value = resultado.textContent;
    resultado.textContent = '';
    actualizarBoton('');
});

// Evento para la tecla Enter
textoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && textoInput.value.length >= 3) {
        textoInput.value = resultado.textContent;
        resultado.textContent = '';
        actualizarBoton('');
    }
});