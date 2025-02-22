document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textInput");
    const button = document.getElementById("reverseButton");
    const output = document.getElementById("result");

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    button.addEventListener("click", function () {
        output.textContent = reverseString(input.value);
    });
});
