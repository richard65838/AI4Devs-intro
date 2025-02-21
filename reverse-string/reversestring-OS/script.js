document.addEventListener("DOMContentLoaded", function() {
  const inputString = document.getElementById("inputString");
  const reverseButton = document.getElementById("reverseButton");
  const reversedOutput = document.getElementById("reversedOutput");
  const copyButton = document.getElementById("copyButton");

  // Reverse the string when the Reverse button is clicked
  reverseButton.addEventListener("click", function() {
    const originalText = inputString.value;
    const reversedText = originalText.split("").reverse().join("");
    reversedOutput.textContent = reversedText;
  });

  // Copy the reversed string to the clipboard when the Copy button is clicked
  copyButton.addEventListener("click", function() {
    const textToCopy = reversedOutput.textContent;
    if (!textToCopy) return; // Do nothing if there's no text
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });
});

