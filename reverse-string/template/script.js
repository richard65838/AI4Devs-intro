document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const convertButton = document.getElementById("convertButton");
  const autoOutputText = document.getElementById("autoOutputText");
  const manualOutputText = document.getElementById("manualOutputText");

  textInput.addEventListener("input", function () {
    const inputValue = textInput.value;
    if (inputValue.length > 3 && inputValue.length <= 256) {
      convertButton.style.display = "block";
      autoOutputText.textContent = reverseString(inputValue);
    } else {
      convertButton.style.display = "none";
      autoOutputText.textContent = "";
    }
  });

  convertButton.addEventListener("click", function () {
    manualOutputText.textContent = reverseString(textInput.value);
  });

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
});
