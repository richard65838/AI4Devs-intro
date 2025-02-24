document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");
  const warningText = document.getElementById("warningText");

  // Function to reverse the string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Function to handle input changes
  function handleInput() {
    const inputValue = inputText.value;
    const isValid = inputValue.length >= 3;

    // Show/hide warning message
    warningText.classList.toggle("hidden", isValid);

    // Update input styling
    if (!isValid && inputValue.length > 0) {
      inputText.classList.add("border-red-500", "focus:ring-red-500");
      result.textContent = "";
    } else {
      inputText.classList.remove("border-red-500", "focus:ring-red-500");
      if (isValid) {
        // Animate the result update
        result.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
          result.textContent = reverseString(inputValue);
          result.classList.remove("opacity-0", "scale-95");
          result.classList.add("opacity-100", "scale-100");
        }, 50);
      }
    }
  }

  // Add input event listener for real-time updates
  inputText.addEventListener("input", handleInput);

  // Initial check
  handleInput();
});
