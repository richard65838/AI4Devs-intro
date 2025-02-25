// Global variable for the minimum number of characters required
const MIN_CHARACTERS = 3

// Main function to handle input changes
function handleInput() {
  const input = getInputValue()
  toggleReverseButton(input)
  updateOutput(input)
}

// Get the value of the input field
function getInputValue() {
  return document.getElementById("inputString").value
}

// Toggle visibility of the "Reverse" button based on input length
function toggleReverseButton(input) {
  const reverseBtn = document.getElementById("reverseBtn")
  reverseBtn.style.display =
    input.length >= MIN_CHARACTERS ? "inline-block" : "none"
}

// Update the output based on input value, in real-time
function updateOutput(input) {
  const output = document.getElementById("output")
  if (input.length >= MIN_CHARACTERS) {
    output.textContent = reverseString(input)
  } else {
    output.textContent = "" // Clear output when input is less than MIN_CHARACTERS
  }
}

// Reverse the string
function reverseString(input) {
  return input.split("").reverse().join("")
}

// Reverse the string when the "Reverse" button is clicked
function reverseStringOnButtonClick() {
  const input = getInputValue()
  const output = document.getElementById("output")

  if (input.length >= MIN_CHARACTERS) {
    output.textContent = reverseString(input)
  } else {
    output.textContent = `Please enter at least ${MIN_CHARACTERS} characters to reverse the string.`
  }
}
