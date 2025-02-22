document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textInput");
    const output = document.getElementById("result");

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // Evento al escribir en el input
    input.addEventListener("input", function () {
        output.textContent = input.value.length > 3 ? reverseString(input.value) : "";
    });
});
