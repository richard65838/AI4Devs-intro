document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const reverseBtn = document.getElementById("reverseBtn");
    const reversedOutput = document.getElementById("reversedOutput");
    const copyBtn = document.getElementById("copyBtn");

    const realTimeInput = document.getElementById("realTimeInput");
    const realTimeOutput = document.getElementById("realTimeOutput");

    // Función para invertir una cadena de forma segura
    function reverseString(str) {
        if (!/^[a-zA-Z0-9\s.,!?]+$/.test(str)) {
            return "Entrada no válida";
        }
        return str.split("").reverse().join("");
    }

    // Habilita el botón solo si hay al menos 3 caracteres
    textInput.addEventListener("input", () => {
        reverseBtn.disabled = textInput.value.length < 3;
    });

    // Acción del botón Reverse
    reverseBtn.addEventListener("click", () => {
        reversedOutput.textContent = reverseString(textInput.value);
    });

    // Acción del botón Copy
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(reversedOutput.textContent)
            .then(() => alert("Texto copiado al portapapeles"))
            .catch(err => console.error("Error al copiar:", err));
    });

    // Funcionalidad de inversión en tiempo real
    realTimeInput.addEventListener("input", () => {
        realTimeOutput.textContent = reverseString(realTimeInput.value);
    });
});
