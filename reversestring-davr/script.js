document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const outputParagraph = document.getElementById("output");

    reverseButton.addEventListener("click", () => {
        outputParagraph.textContent = inputField.value.split("").reverse().join("");
    });
});
