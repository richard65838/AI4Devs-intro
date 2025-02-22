function reverseString() {
    let inputText = document.getElementById("inputText").value;
    let reversedText = inputText.split("").reverse().join("");
    document.getElementById("outputText").innerText = reversedText;
}

function checkInput() {
    let inputText = document.getElementById("inputText").value;
    let button = document.getElementById("reverseButton");
    button.disabled = inputText.length < 3;
}
