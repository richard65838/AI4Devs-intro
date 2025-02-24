// Función para invertir el texto
function invertirTexto() {
    const texto = document.getElementById('textoInput').value;
    const textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultado').textContent = textoInvertido;
}

// Evento para detectar la tecla Enter
document.getElementById('textoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        invertirTexto();
    }
});