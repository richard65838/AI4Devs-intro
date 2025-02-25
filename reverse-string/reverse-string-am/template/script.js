document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const reverseBtn = document.getElementById("reverseBtn");
    const copyBtn = document.getElementById("copyBtn");
    const output = document.getElementById("output");

    // Function to reverse text
    function reverseText(text) {
        return text.split('').reverse().join('');
    }

    // Reverse text on button click
    reverseBtn.addEventListener("click", () => {
        output.textContent = reverseText(textInput.value);
    });

    // Copy reversed text to clipboard
    copyBtn.addEventListener("click", () => {
        if (output.textContent) {
            navigator.clipboard.writeText(output.textContent).then(() => {
                alert("Copied to clipboard!");
            }).catch(err => console.error("Error copying text:", err));
        }
    });

    // Test the reverse function
    console.assert(reverseText("hello") === "olleh", "Test Failed!");
    console.assert(reverseText("AI4Devs") === "sveD4IA", "Test Failed!");
});
