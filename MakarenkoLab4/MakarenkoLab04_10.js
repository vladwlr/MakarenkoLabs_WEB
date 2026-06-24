const list = [1, 2, 3, 4, 5];
const result = list.slice().reverse().map((value) => value ** 2);
document.getElementById('result').innerHTML = `Початковий масив: <strong>${list.join(', ')}</strong><br>Після обробки: <strong>${result.join(', ')}</strong>`;
console.log('Початковий масив:', list); console.log('Після обробки:', result);
