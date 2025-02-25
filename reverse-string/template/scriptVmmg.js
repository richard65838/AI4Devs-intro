// Obtenemos los elementos del DOM
const userInput = document.getElementById("userInput");
const reverseBtn = document.getElementById("reverseBtn");
const resultDiv = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

// Variable para almacenar la cadena invertida actual
let currentReversedText = "";

// Evento para invertir el texto
reverseBtn.addEventListener("click", () => {
  const text = userInput.value.trim();

  // Limpiamos clases anteriores
  resultDiv.classList.remove("error", "reversed");

  // Validación: si el usuario no ingresa nada, mostramos un mensaje de error
  if (!text) {
    resultDiv.textContent = "Por favor, ingresa un texto antes de invertir.";
    resultDiv.classList.add("error");
    currentReversedText = ""; // No hay texto que copiar
    return;
  }

  // Invertimos la cadena
  const reversedText = text.split("").reverse().join("");

  // Guardamos en la variable global
  currentReversedText = reversedText;

  // Mostramos el resultado en la pantalla
  resultDiv.textContent = `Texto invertido: ${reversedText}`;
  resultDiv.classList.add("reversed");
});

// Evento para copiar el texto invertido
copyBtn.addEventListener("click", () => {
  if (!currentReversedText) {
    alert("No hay texto para copiar.");
    return;
  }

  // Usamos la API Clipboard
  navigator.clipboard
    .writeText(currentReversedText)
    .then(() => {
      alert("Texto copiado al portapapeles.");
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
    });
});
