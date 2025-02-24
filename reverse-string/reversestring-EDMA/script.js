document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const resultDisplay = document.getElementById("result");

    // Ocultar el botón al inicio
    reverseButton.style.display = "none";

    // Evento para detectar cambios en el input
    inputField.addEventListener("input", function () {
        if (inputField.value.trim().length > 3) {
            reverseButton.style.display = "block";
        } else {
            reverseButton.style.display = "none";
        }
    });

    // Evento para invertir la cadena al hacer clic en el botón
    reverseButton.addEventListener("click", function () {
        const text = inputField.value.trim();
        if (text === "") {
            showError("Por favor, ingresa un texto válido.");
            return;
        }
        showResult(reverseString(text));
    });

    // Función pura para invertir la cadena de texto
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // Muestra el resultado en la interfaz
    function showResult(result) {
        resultDisplay.textContent = `Texto invertido: ${result}`;
        resultDisplay.style.color = "#333";
    }

    // Muestra un mensaje de error
    function showError(message) {
        resultDisplay.textContent = message;
        resultDisplay.style.color = "red";
    }
});
