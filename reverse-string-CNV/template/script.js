function reverseString() {
    let input = document.getElementById("inputText").value;
    let reversed = input.split("").reverse().join("");
    document.getElementById("output").textContent = reversed;
}

function copyToClipboard() {
    let outputText = document.getElementById("output").textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText);
        alert("Texto copiado al portapapeles");
    } else {
        alert("No hay texto para copiar");
    }
}
