document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const reverseBtn = document.getElementById("reverseBtn");
    const copyBtn = document.getElementById("copyBtn");
    const output = document.getElementById("output");
  
    // Función para invertir la cadena de texto
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
  
    // Evento para el botón "Reverse"
    reverseBtn.addEventListener("click", function () {
      const inputText = textInput.value.trim();
  
      // Validación: se requiere al menos 3 caracteres
      if (inputText.length < 3) {
        output.textContent = "⚠️ Ingresa al menos 3 caracteres.";
        return;
      }
  
      // Se invierte el texto y se muestra en el área de salida
      output.textContent = reverseString(inputText);
    });
  
    // Evento para el botón "Copy"
    copyBtn.addEventListener("click", function () {
      if (output.textContent) {
        // Copiar el resultado al portapapeles
        navigator.clipboard.writeText(output.textContent)
          .then(() => {
            // Limpia el campo de entrada y restaura el placeholder predeterminado
            textInput.value = "";
            textInput.placeholder = "Hello, welcome to AI4Devs";
            alert("Texto copiado y el campo de entrada ha sido reiniciado.");
          })
          .catch(err => {
            console.error("Error al copiar: ", err);
            alert("No se pudo copiar el texto.");
          });
      }
    });
  });