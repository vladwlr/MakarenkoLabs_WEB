function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return b === 0 ? 'ділення на нуль' : a / b; }
const actions = { '+': add, '-': sub, '*': mul, '/': div };
function calculate() {
    const first = Number(document.getElementById('first').value);
    const second = Number(document.getElementById('second').value);
    const action = document.getElementById('action').value;
    const result = actions[action] ? actions[action](first, second) : 'операцію не знайдено';
    document.getElementById('result').innerHTML = `${first} ${action} ${second} = <strong>${result}</strong>`;
    console.log('Результат:', result);
}
document.getElementById('countBtn').addEventListener('click', calculate);
calculate();
