document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("inputText");
  const outputField = document.getElementById("outputText");
  const copyButton = document.querySelector(".copy-btn");
  const copySuccessMessage = document.getElementById("copySuccess");

  // Evento para invertir el texto en tiempo real
  inputField.addEventListener("input", () => {
      outputField.textContent = inputField.value.split("").reverse().join("");
  });

  // Función para copiar al portapapeles con mejor feedback
  copyButton.addEventListener("click", () => {
      if (outputField.textContent.trim() !== "") {
          navigator.clipboard.writeText(outputField.textContent)
              .then(() => {
                  copySuccessMessage.style.display = "block";
                  setTimeout(() => {
                      copySuccessMessage.style.display = "none";
                  }, 2000);
              })
              .catch(err => console.error("Error copying text: ", err));
      }
  });
});
