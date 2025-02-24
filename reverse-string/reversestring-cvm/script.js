document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input-text");
    const reverseButton = document.getElementById("reverse-btn");
    const resultParagraph = document.getElementById("result-text");
    const copyButton = document.getElementById("copy-btn");
    const errorParagraph = document.getElementById("error-text");

    // Hide copy button initially
    copyButton.style.display = "none";

    reverseButton.addEventListener("click", function () {
        const text = inputField.value.trim();
        
        // Validation
        if (text.length === 0) {
            errorParagraph.textContent = "Error: Input cannot be empty.";
            resultParagraph.textContent = "";
            copyButton.style.display = "none";
            return;
        }
        if (text.length < 3) {
            errorParagraph.textContent = "Error: Input must be at least 3 characters long.";
            resultParagraph.textContent = "";
            copyButton.style.display = "none";
            return;
        }
        
        // Reverse the string
        const reversedText = text.split("").reverse().join("");
        resultParagraph.textContent = reversedText;
        errorParagraph.textContent = "";
        copyButton.style.display = "inline-block";
    });

    copyButton.addEventListener("click", function () {
        const textToCopy = resultParagraph.textContent;
        if (textToCopy.length === 0) {
            errorParagraph.textContent = "Error: Nothing to copy.";
            return;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            errorParagraph.textContent = "Copied to clipboard!";
        }).catch(err => {
            errorParagraph.textContent = "Error copying text.";
        });
    });
});

