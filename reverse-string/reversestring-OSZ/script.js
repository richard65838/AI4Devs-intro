const inputField = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

// Hide Reverse button initially
reverseBtn.style.display = "none";

// Show Reverse button when input has at least 3 characters
inputField.addEventListener("input", function () {
  if (inputField.value.length >= 3) {
    reverseBtn.style.display = "inline-block";
  } else {
    reverseBtn.style.display = "none";
  }
});

// Reverse text when button is clicked
reverseBtn.addEventListener("click", function () {
  let inputText = inputField.value;
  let reversedText = inputText.split("").reverse().join("");
  outputText.innerText = reversedText;
});

// Copy reversed text
copyBtn.addEventListener("click", function () {
  let text = outputText.innerText;
  if (text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } else {
    alert("Nothing to copy!");
  }
});

// Real-time reversing for second input
liveInput.addEventListener("input", function () {
  liveOutput.innerText = liveInput.value.split("").reverse().join("");
});
