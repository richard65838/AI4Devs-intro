document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textInput");
    const button = document.getElementById("reverseButton");
    const output = document.getElementById("result");

    // Ocultar el botón por defecto
    button.style.display = "none";

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // Evento al escribir en el input
    input.addEventListener("input", function () {
        if (input.value.length > 3) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
            output.textContent = ""; // Borra el resultado si se borra el texto
        }
    });

    // Evento al hacer clic en el botón
    button.addEventListener("click", function () {
        output.textContent = reverseString(input.value);
    });
});

