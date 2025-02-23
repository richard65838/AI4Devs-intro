document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const reverseBtn = document.getElementById("reverseBtn");
    const outputText = document.getElementById("outputText");
    const copyBtn = document.getElementById("copyBtn");

    function updateReverse() {
        const text = inputText.value;
        if (text.length > 3) {
            const reversed = text.split("").reverse().join("");
            outputText.textContent = reversed;
            reverseBtn.style.display = "flex";
            copyBtn.style.display = "flex";
        } else {
            outputText.textContent = "";
            reverseBtn.style.display = "none";
            copyBtn.style.display = "none";
        }
    }

    inputText.addEventListener("input", updateReverse);

    reverseBtn.addEventListener("click", updateReverse);

    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(outputText.textContent).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => console.error("Error al copiar:", err));
    });
});
