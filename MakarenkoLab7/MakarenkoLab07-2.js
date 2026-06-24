let secret = 0;
let count = 0;
const guessInput = document.getElementById('guessInput');
const tryBtn = document.getElementById('tryBtn');
const newGameBtn = document.getElementById('newGameBtn');
const gameHint = document.getElementById('gameHint');
const countBox = document.getElementById('countBox');
const historyBox = document.getElementById('history');

function getShortDateTime() {
    const now = new Date();
    const date = String(now.getDate()).padStart(2, '0') + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + now.getFullYear();
    const time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
    return `${date} ${time}`;
}

function getTemperatureHint(secretNumber, guess) {
    const distance = Math.abs(secretNumber - guess);
    if (distance === 0) return 'правильно';
    if (distance >= 20) return 'холодно';
    if (distance >= 10) return 'тепло';
    return 'гаряче';
}

function addHistory(text) {
    historyBox.textContent = text + '\n' + historyBox.textContent;
    console.log(text);
}

function startGame() {
    secret = Math.floor(Math.random() * 51);
    count = 0;
    countBox.textContent = count;
    historyBox.textContent = '';
    gameHint.textContent = 'Я загадав число. Введи варіант і натисни перевірку.';
    guessInput.value = 25;
    guessInput.focus();
}

function checkGuess() {
    const guess = Number(guessInput.value);
    if (Number.isNaN(guess) || guess < 0 || guess > 50) {
        gameHint.textContent = 'Введи число від 0 до 50.';
        return;
    }

    count++;
    countBox.textContent = count;
    const hint = getTemperatureHint(secret, guess);
    addHistory(`${getShortDateTime()} | спроба ${count} | ${guess} — ${hint}`);

    if (guess === secret) {
        gameHint.textContent = `Вгадав за ${count} спроб. Число було ${secret}.`;
    } else {
        gameHint.textContent = `${hint}. Спробуй ще.`;
    }
}

tryBtn.addEventListener('click', checkGuess);
newGameBtn.addEventListener('click', startGame);
guessInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') checkGuess(); });
startGame();
