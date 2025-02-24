document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const resultDisplay = document.getElementById("result");

    // Evento de entrada en tiempo real
    inputField.addEventListener("input", function () {
        const text = inputField.value.trim();
        if (text.length > 0) {
            showResult(reverseString(text));
        } else {
            resultDisplay.textContent = "";
        }
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
});
