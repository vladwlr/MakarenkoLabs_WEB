function calcAverage(a, b, c) { return (a + b + c) / 3; }
const nums = [12, 20, 31];
const avg = calcAverage(...nums);
document.getElementById('result').innerHTML = `Числа: ${nums.join(', ')}<br>Середнє значення: <strong>${avg.toFixed(2)}</strong>`;
console.log('Середнє значення:', avg);
