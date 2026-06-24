const output = document.getElementById('answer');
let numberValue = 10000;
let steps = 0;
const history = [];

while (numberValue >= 50) {
    history.push(`${numberValue} / 2 = ${numberValue / 2}`);
    numberValue = numberValue / 2;
    steps++;
}

output.textContent = `Кількість поділів: ${steps}
Останнє значення: ${numberValue}

Хід роботи:
${history.join('\n')}`;
console.log(output.textContent);
