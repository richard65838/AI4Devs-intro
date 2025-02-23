document.getElementById("reverseBtn").addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    let reversedText = inputText.split("").reverse().join("");

    document.getElementById("result").textContent = reversedText;
    document.getElementById("copyBtn").style.display = "inline-block";
});

document.getElementById("copyBtn").addEventListener("click", function () {
    let resultText = document.getElementById("result").textContent;

    navigator.clipboard.writeText(resultText).then(() => {
        alert("Text copied to clipboard!");
    });
});