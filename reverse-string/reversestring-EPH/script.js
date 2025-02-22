document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const inputText = document.getElementById("inputText");
  const reverseBtn = document.getElementById("reverseBtn");
  const result = document.getElementById("result");
  const warningText = document.getElementById("warningText");

  // Function to reverse the string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Function to validate input and update UI
  function validateInput() {
    const isValid = inputText.value.length >= 3;
    reverseBtn.disabled = !isValid;
    warningText.classList.toggle("hidden", isValid);

    // Add visual feedback on the input
    if (!isValid && inputText.value.length > 0) {
      inputText.classList.add("border-red-500", "focus:ring-red-500");
    } else {
      inputText.classList.remove("border-red-500", "focus:ring-red-500");
    }

    return isValid;
  }

  // Add input event listener for real-time validation
  inputText.addEventListener("input", validateInput);

  // Add click event listener to the button
  reverseBtn.addEventListener("click", function () {
    if (validateInput()) {
      const originalText = inputText.value;
      const reversedText = reverseString(originalText);
      result.textContent = reversedText;

      // Add animation effect
      result.classList.add("opacity-0");
      result.classList.add("transform", "scale-95");
      setTimeout(() => {
        result.classList.remove("opacity-0", "scale-95");
        result.classList.add("opacity-100", "scale-100");
      }, 50);
    }
  });

  // Add enter key support
  inputText.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      reverseBtn.click();
    }
  });

  // Initial validation
  validateInput();
});
