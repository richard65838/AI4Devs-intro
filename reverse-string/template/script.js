// Grab elements from the DOM
const userInput = document.getElementById("userInput");
const reverseBtn = document.getElementById("reverseBtn");
const resultDiv = document.getElementById("result");

// Add event to the button
reverseBtn.addEventListener("click", () => {
  // Get the user's input value
  const text = userInput.value.trim();

  // Validation: if the user doesn't enter anything, show an error message
  if (!text) {
    resultDiv.textContent = "Please enter some text before reversing.";
    return;
  }

  // Reverse the string
  const reversedText = text.split("").reverse().join("");

  // Display the reversed text
  resultDiv.textContent = `Reversed text: ${reversedText}`;
});
