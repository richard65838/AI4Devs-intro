document.addEventListener("DOMContentLoaded", function () {
    // Manejador de eventos principal
    const inputField = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const resultDisplay = document.getElementById("result");

    reverseButton.addEventListener("click", function () {
        const text = inputField.value.trim();
        if (!isValidInput(text)) {
            showError("Por favor, ingresa un texto válido.");
            return;
        }
        showResult(reverseString(text));
    });

    // Valida la entrada del usuario
    function isValidInput(text) {
        return text.length > 0;
    }

    // Invierte la cadena de texto (función pura)
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
