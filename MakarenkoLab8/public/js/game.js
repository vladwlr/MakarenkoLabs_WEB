const board = document.getElementById('board');
const timerBox = document.getElementById('timer');
const restartButton = document.getElementById('restart');
const resultsTable = document.getElementById('results');

let nextNumber = 1;
let timeLeft = 60;
let timerId = null;
let gameIndex = 1;

function randomFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function getRandomColor() {
    const colors = ['#38bdf8', '#a78bfa', '#f97316', '#facc15', '#fb7185', '#34d399'];
    return randomFrom(colors);
}

function mixNumbers() {
    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
}

function drawBoard() {
    board.innerHTML = '';
    nextNumber = 1;

    mixNumbers().forEach((value) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = value;
        cell.style.color = getRandomColor();
        cell.style.fontSize = randomFrom([22, 26, 30, 34, 38]) + 'px';

        cell.addEventListener('click', () => checkCell(cell, value));
        board.appendChild(cell);
    });
}

function checkCell(cell, value) {
    if (value !== nextNumber) {
        alert('Потрібно натиснути ' + nextNumber);
        return;
    }

    cell.classList.add('selected');
    nextNumber++;

    if (nextNumber > 25) finishGame();
}

function startTimer() {
    clearInterval(timerId);
    timeLeft = 60;
    timerBox.textContent = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        timerBox.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert('Час завершився');
            restartGame();
        }
    }, 1000);
}

function addResult(seconds) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${gameIndex}</td><td>${seconds} с</td>`;
    resultsTable.appendChild(row);
    gameIndex++;
}

function finishGame() {
    clearInterval(timerId);
    const spent = 60 - timeLeft;
    addResult(spent);
    alert(`Готово. Час: ${spent} секунд`);
    restartGame();
}

function restartGame() {
    drawBoard();
    startTimer();
}

restartButton.addEventListener('click', restartGame);
restartGame();
