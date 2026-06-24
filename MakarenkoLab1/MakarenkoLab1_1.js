const output = document.getElementById('answer');
const simpleNumbers = [];

function isSimpleNumber(value) {
    if (value < 2) return false;
    for (let divider = 2; divider <= Math.sqrt(value); divider++) {
        if (value % divider === 0) return false;
    }
    return true;
}

for (let value = 2; value <= 100; value++) {
    if (isSimpleNumber(value)) simpleNumbers.push(value);
}

const text = simpleNumbers.join(', ');
output.textContent = text;
console.log('Прості числа від 2 до 100:', text);
