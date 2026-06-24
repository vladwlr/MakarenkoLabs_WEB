const numberInput = document.getElementById('numberInput');
const sendBtn = document.getElementById('sendBtn');
const answer = document.getElementById('answer');

async function sendValue() {
    const value = numberInput.value;

    if (value === '') {
        answer.textContent = 'Спочатку введіть число';
        return;
    }

    try {
        const response = await fetch('/calculate-square', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        });

        const data = await response.json();
        answer.textContent = `${data.input}² = ${data.result}`;
    } catch (error) {
        answer.textContent = 'Помилка запиту до сервера';
        console.error(error);
    }
}

sendBtn.addEventListener('click', sendValue);
numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') sendValue();
});
