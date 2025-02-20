document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const outputSpan = document.getElementById("output");

    inputField.addEventListener("input", function () {
        const reversedText = inputField.value.split('').reverse().join('');
        outputSpan.textContent = reversedText;
    });
});
