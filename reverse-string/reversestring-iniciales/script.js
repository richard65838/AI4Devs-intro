document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("inputText");
    const outputElement = document.getElementById("outputText");
    const button = document.getElementById("invertButton");

    function updateText() {
        const text = inputElement.value;
        outputElement.textContent = text.split("").reverse().join("");

        // Show the button only if the text has more than 3 characters
        if (text.length > 3) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    }

    // Update text in real time
    inputElement.addEventListener("input", updateText);

    // Button click also updates the text (for extra interaction)
    button.addEventListener("click", updateText);
});
