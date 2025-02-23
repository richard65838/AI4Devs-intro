document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const reverseBtn = document.getElementById("reverseBtn");
  const outputText = document.getElementById("outputText");
  const copyBtn = document.getElementById("copyBtn");
  const realTimeToggle = document.getElementById("realTimeToggle");

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  function handleInput() {
    if (realTimeToggle.checked) {
      outputText.innerText = reverseString(inputText.value);
      reverseBtn.disabled = true;
    } else {
      reverseBtn.disabled = inputText.value.length < 3;
    }
  }

  function reverseText() {
    outputText.innerText = reverseString(inputText.value);
  }

  function copyText() {
    navigator.clipboard.writeText(outputText.innerText).then(() => {
      alert("Copied to clipboard!");
    });
  }

  inputText.addEventListener("input", handleInput);
  reverseBtn.addEventListener("click", reverseText);
  copyBtn.addEventListener("click", copyText);
  realTimeToggle.addEventListener("change", handleInput);
});
