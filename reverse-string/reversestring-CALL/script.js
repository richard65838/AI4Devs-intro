document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const reverseButton = document.getElementById("reverseButton");
    const output = document.getElementById("output");

    reverseButton.addEventListener("click", () => {
        const inputText = textInput.value;
        const reversedText = inputText.split("").reverse().join("");
        output.textContent = reversedText;
    });
});
