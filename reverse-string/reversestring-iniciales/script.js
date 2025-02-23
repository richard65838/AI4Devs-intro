document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const reverseBtn = document.getElementById("reverseBtn");
    const outputText = document.getElementById("outputText");
    const copyBtn = document.getElementById("copyBtn");

    reverseBtn.addEventListener("click", function () {
        const reversed = inputText.value.split("").reverse().join("");
        outputText.textContent = reversed;
        copyBtn.style.display = reversed ? "block" : "none";
    });

    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(outputText.textContent).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => console.error("Error al copiar:", err));
    });
});
