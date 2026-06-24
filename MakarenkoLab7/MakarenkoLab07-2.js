function getShortDateTime() {
    const now = new Date();
    const date = String(now.getDate()).padStart(2, '0') + '.' +
        String(now.getMonth() + 1).padStart(2, '0') + '.' + now.getFullYear();
    const time = String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');

    return `${date} ${time}`;
}

function getTemperatureHint(secret, guess) {
    const distance = Math.abs(secret - guess);
    if (distance >= 20) return 'холодно';
    if (distance >= 10) return 'тепло';
    return 'гаряче';
}

function playGuessGame() {
    let again = true;

    while (again) {
        const secret = Math.floor(Math.random() * 51);
        let count = 0;
        let success = false;

        while (!success) {
            const guess = Number(prompt('Вгадай число від 0 до 50'));
            count++;

            if (guess === secret) {
                console.log(`${getShortDateTime()} | спроба ${count} | ${guess} — правильно`);
                alert(`Вгадав за ${count} спроб. Число було ${secret}.`);
                success = true;
            } else {
                console.log(`${getShortDateTime()} | спроба ${count} | ${guess} — не вгадав`);
                alert(`${getTemperatureHint(secret, guess)}. Спробуй ще.`);
            }
        }

        again = confirm('Зіграти ще раз?');
    }
}

playGuessGame();
