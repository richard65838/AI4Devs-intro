document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");

    inputText.addEventListener("input", () => {
        outputText.textContent = inputText.value.split("").reverse().join("");
    });
});