const VALIDATION_REGEX = /^[a-zA-Z0-9]+$/;

// Pure function to reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Input validation and sanitization
function validateInput(input) {
    return input.replace(/[^a-zA-Z0-9]/g, '');
}

// UI Functions
function handleInput() {
    const input = document.getElementById('inputText');
    const reversed = document.getElementById('reversedText');
    const button = document.getElementById('actionBtn');

    const sanitized = validateInput(input.value);
    if (sanitized !== input.value) {
        input.value = sanitized;
    }

    const isValid = sanitized.length > 3;
    input.classList.toggle('invalid', !isValid);

    reversed.textContent = reverseString(sanitized);

    button.classList.toggle('hidden', !isValid);
    button.disabled = !isValid;
}

function handleButtonClick() {
    const input = document.getElementById('inputText');
    const reversed = document.getElementById('reversedText');
    const container = document.getElementById('tagsContainer');

    if (reversed.textContent) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = reversed.textContent;
        container.prepend(tag);
    }

    input.value = '';
    reversed.textContent = '';
    input.classList.remove('invalid');
    document.getElementById('actionBtn').classList.add('hidden');
}

// Event Listeners
document.getElementById('inputText').addEventListener('input', handleInput);
document.getElementById('actionBtn').addEventListener('click', handleButtonClick);