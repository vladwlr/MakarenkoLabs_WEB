const output = document.getElementById('answer');
const resultRows = [];
let counter = 0;

do {
    let mark = 'непарне число';
    if (counter === 0) mark = 'нуль';
    else if (counter % 2 === 0) mark = 'парне число';

    resultRows.push(`${counter} — ${mark}`);
    counter++;
} while (counter <= 10);

output.textContent = resultRows.join('\n');
console.log(resultRows.join('\n'));
