function invertirTexto() {
    let texto = document.getElementById("inputText").value;
    let textoInvertido = texto.split("").reverse().join("");
    document.getElementById("resultado").textContent = textoInvertido;
}


function validarTexto() {
    let texto = document.getElementById("inputText").value;
    let boton = document.getElementById("invertButton");
    boton.style.display = texto.length > 3 ? "block" : "none";
}


function procesarTexto() {
    let texto = document.getElementById("inputText").value;
    let boton = document.getElementById("invertButton");
    let resultado = document.getElementById("resultado");

    resultado.textContent = texto.split("").reverse().join("");
    boton.style.display = texto.length > 3 ? "block" : "none";
}