document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("textInput");
  const button = document.getElementById("reverseBtn");
  const result = document.getElementById("result");

  // Función para invertir el texto
  function reverseText() {
    const text = input.value;
    result.textContent = text.split("").reverse().join("");
  }

  // Mostrar el botón cuando el texto tiene más de 3 caracteres
  input.addEventListener("input", function () {
    const text = input.value;
    if (text.length > 3) {
      button.style.display = "inline-block"; // Muestra el botón
    } else {
      button.style.display = "none"; // Oculta el botón
    }
  });

  // Evento para invertir el texto al presionar Enter
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      reverseText();
    }
  });

  // Evento para el botón (aunque se invierte en tiempo real, se conserva el evento)
  button.addEventListener("click", reverseText);

  // Invertir texto en tiempo real
  input.addEventListener("input", function () {
    const text = input.value;
    if (text.length > 3) {
      reverseText();
    } else {
      result.textContent = "";
    }
  });
});
