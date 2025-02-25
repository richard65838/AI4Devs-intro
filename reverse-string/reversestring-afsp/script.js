document.getElementById('inputString').addEventListener('input', function () {
    // Get the input string from the text box
    const inputString = this.value;

    // Reverse the string
    const reversedString = inputString.split('').reverse().join('');

    // Display the reversed string in the label
    document.getElementById('reversedString').textContent = `Reversed String: ${reversedString}`;
});
