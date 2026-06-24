const values = [];
for (let number = 1; number <= 100; number++) {
    let output = '';
    if (number % 3 === 0) output += 'Fizz';
    if (number % 5 === 0) output += 'Buzz';
    values.push(output || number);
}
document.getElementById('result').textContent = values.join('  ·  ');
console.log(values.join('\n'));
