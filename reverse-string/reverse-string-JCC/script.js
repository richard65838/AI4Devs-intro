document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const result = document.getElementById('result');

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function updateResult() {
        const text = inputText.value;
        if (text.length >= 3) {
            result.textContent = reverseString(text);
            reverseBtn.style.display = 'block';
            copyBtn.style.display = text ? 'block' : 'none';
        } else {
            result.textContent = '';
            reverseBtn.style.display = 'none';
            copyBtn.style.display = 'none';
        }
    }

    function showCopiedNotification() {
        const notification = document.createElement('div');
        notification.textContent = '¡Copiado al portapapeles!';
        notification.className = 'copied';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    inputText.addEventListener('input', updateResult);
    
    inputText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && inputText.value.length >= 3) {
            updateResult();
        }
    });

    reverseBtn.addEventListener('click', updateResult);

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(result.textContent);
            showCopiedNotification();
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    });
});
