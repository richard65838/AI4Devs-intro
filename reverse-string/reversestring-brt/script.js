const input = document.getElementById('inputString');
const reverseBtn = document.getElementById('reverseBtn');
const clearBtn = document.getElementById('clearBtn');
const result = document.getElementById('result');

reverseBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text.length === 0) {
        result.style.display = 'none';
        result.textContent = '';
        return;
    }
    
    const reversedText = text.split('').reverse().join('');
    result.textContent = reversedText;
    result.style.display = 'block';
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    result.textContent = '';
    result.style.display = 'none';
});

input.addEventListener('input', () => {
    if (input.value.trim().length === 0) {
        result.style.display = 'none';
        result.textContent = '';
    }
});
