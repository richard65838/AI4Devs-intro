// Referencias a los elementos del DOM
const inputString = document.getElementById("inputString");
const reverseBtn = document.getElementById("reverseBtn");
const output = document.getElementById("output");

// 1) Inversión en tiempo real: al escribir en el input
inputString.addEventListener("input", function() {
  const text = inputString.value;
  // Invertimos la cadena
  const reversedText = text.split("").reverse().join("");
  // Mostramos el texto invertido en tiempo real
  output.textContent = reversedText;

  // 2) Mostramos/ocultamos el botón Reverse si hay más de 3 caracteres
  if (text.length > 3) {
    reverseBtn.style.display = "inline-block";
  } else {
    reverseBtn.style.display = "none";
  }
});

// 3) Botón Reverse (opcional si el usuario quiere forzar la inversión de nuevo)
function manualReverse() {
  const text = inputString.value;
  const reversedText = text.split("").reverse().join("");
  output.textContent = reversedText;
}

// 4) Botón Copy para copiar el texto invertido al portapapeles
function copyReversed() {
  const reversedText = output.textContent;
  
  if (reversedText) {
    navigator.clipboard.writeText(reversedText)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch(err => {
        console.error("Error al copiar: ", err);
      });
  } else {
    alert("No hay texto para copiar");
  }
}
