document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const outputParagraph = document.getElementById("output");

    reverseButton.addEventListener("click", () => {
        const text = inputField.value;
        outputParagraph.textContent = text.split("").reverse().join("");
    });
});
