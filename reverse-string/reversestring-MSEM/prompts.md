# PROMPT

Ahora eres un ingeniero de software con más de 10 años de experiencia en frontend, en javascript en concreto. Necesito que crees una web app con las siguientes especificaciones:

- Debe haber un título "Reverse String"
- Debo poder introducir un texto
- Deben haber 3 botones
  Botón 1: debe tener el texto "Reverse" y al pulsarlo, debe aparecer justo debajo el texto completamente alrevés. Ejemplo: introduzco "hola" y como resultado, debe aparecer "aloh"
  Botón 2: Debe tener el texto "Automático", al pulsarlo se debe activar la funcionalidad de poner el texto introducito alrevés, de manera automática sin tener que pulsar nada más. En caso de volver a pulsar eeste botón de "Automático", debe parar de aparecer el resultado automáticamente.
Botón 3: Debe tener el texto "Copiar" y me copiará en el portapapeles el texto del resultado.


La solución debe tener un estilo moderno en CSS

Recuerda que tienes solo dos archivos para modificar: index.html y script.js

Dame el código dividido acorde a esos dos archivos.

Si tienes algo que necesites aclarar, dimelo antes de comenzar


# RESULTADO

<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Reverse String</h1>
        <input type="text" id="inputText" placeholder="Introduce un texto...">
        <div class="button-group">
            <button id="reverseButton">Reverse</button>
            <button id="autoButton">Automático</button>
            <button id="copyButton">Copiar</button>
        </div>
        <p id="result"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>

<!-- style.css -->
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

.button-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

#reverseButton {
    background-color: #007bff;
    color: white;
}

#reverseButton:hover {
    background-color: #0056b3;
}

#autoButton {
    background-color: #28a745;
    color: white;
}

#autoButton:hover {
    background-color: #1e7e34;
}

#copyButton {
    background-color: #ffc107;
    color: black;
}

#copyButton:hover {
    background-color: #e0a800;
}

#result {
    margin-top: 20px;
    font-size: 18px;
    color: #555;
}
</style>

<!-- script.js -->
<script>
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
</script>
