// Funcionalidad original
function reverseString() {
    // Obtener el valor del input
    let inputText = document.getElementById("textInput").value;
    
    // Revertir el texto
    let reversedText = inputText.split("").reverse().join("");
    
    // Mostrar el resultado
    document.getElementById("result").innerText = `Texto invertido: ${reversedText}`;
}


// Funcionalidad mejorada: Mostrar botón solo si hay más de 3 caracteres
function toggleButton() {
    let inputText = document.getElementById("textInput2").value;
    let button = document.getElementById("reverseButton");

    button.style.display = inputText.length > 3 ? "inline-block" : "none";
}

// Funcionalidad mejorada: Reverse string con la nueva lógica
function reverseStringEnhanced() {
    let inputText = document.getElementById("textInput2").value;
    let reversedText = inputText.split("").reverse().join("");
    document.getElementById("result2").innerText = `Texto invertido: ${reversedText}`;
}

// Funcionalidad en tiempo real con restricción de 4 caracteres
function reverseInRealTime() {
    let inputText = document.getElementById("textInput3").value;
    let resultElement = document.getElementById("result3");

    if (inputText.length >= 4) {
        let reversedText = inputText.split("").reverse().join("");
        resultElement.innerText = `Texto invertido: ${reversedText}`;
        resultElement.style.visibility = "visible";
    } else {
        resultElement.style.visibility = "hidden"; // Ocultar si hay menos de 4 caracteres
    }
}