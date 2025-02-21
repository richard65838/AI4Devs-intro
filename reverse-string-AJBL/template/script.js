function actualizarResultado() {
  const texto = document.getElementById("input-text").value;
  
  // Si el texto tiene más de 3 caracteres, mostrar el botón
  if (texto.length > 3) {
      document.getElementById("invertir-btn").style.display = "inline-block";
  } else {
      document.getElementById("invertir-btn").style.display = "none";
  }

  // Actualizar el resultado en tiempo real
  const textoInvertido = texto.split("").reverse().join("");
  document.getElementById("resultado").innerText = textoInvertido;
}

function invertirTexto() {
  const texto = document.getElementById("input-text").value;
  const textoInvertido = texto.split("").reverse().join("");
  document.getElementById("resultado").innerText = textoInvertido;
}
