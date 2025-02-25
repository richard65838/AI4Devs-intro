document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textInput");
    const outputSpan = document.getElementById("output");

    inputField.addEventListener("input", () => {
        outputSpan.textContent = inputField.value.split("").reverse().join("");
    });
});
