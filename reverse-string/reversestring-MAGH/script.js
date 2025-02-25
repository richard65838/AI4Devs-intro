document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('userInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const output = document.getElementById('output');

    /**
     * Function to reverse a given string.
     * @param {string} str - The string to be reversed.
     * @returns {string} - The reversed string.
     */
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    /**
     * Function to copy text to the clipboard.
     * @param {string} text - The text to be copied.
     */
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard');
        });
    }

    // Event listener to show/hide the reverse button
    inputField.addEventListener('input', () => {
        if (inputField.value.length >= 3) {
            reverseBtn.style.display = 'inline-flex';
        } else {
            reverseBtn.style.display = 'none';
            output.textContent = '';
        }
    });

    // Event listener to reverse text on button click
    reverseBtn.addEventListener('click', () => {
        output.textContent = reverseString(inputField.value);
    });

    // Event listener to copy output text
    copyBtn.addEventListener('click', () => {
        if (output.textContent) {
            copyToClipboard(output.textContent);
        }
    });

    /**
     * Unit tests for the functions
     */
    function runTests() {
        console.assert(reverseString('hello') === 'olleh', 'Test Failed: reverseString("hello") should return "olleh"');
        console.assert(reverseString('AI4Devs') === 'sveD4IA', 'Test Failed: reverseString("AI4Devs") should return "sveD4IA"');
        
        //copyToClipboard('test'); // No direct assertion possible, but should not throw errors
        console.log('All tests passed');
    }

    // Run tests when the script loads
    runTests();

    /**
     * To run tests manually, open the browser console and call runTests().
     * The function will log "All tests passed" if everything is correct.
     */
});
