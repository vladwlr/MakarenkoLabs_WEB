function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return b === 0 ? "ділення на нуль" : a / b; }

const first = Number(prompt("Перше число"));
const second = Number(prompt("Друге число"));
const action = prompt("Операція: +, -, *, /");

const actions = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div
};

if (actions[action]) {
    alert(`Результат: ${actions[action](first, second)}`);
} else {
    alert("Операцію не знайдено");
}
