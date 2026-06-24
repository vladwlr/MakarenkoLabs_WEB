const marks = [8, 12, 5, 10, 7, 11, 9];
const oddValues = marks.filter((value) => value % 2 !== 0);
const total = marks.reduce((sum, value) => sum + value, 0);
const lines = [
    `Масив: ${marks.join(', ')}`,
    `Максимум: ${Math.max(...marks)}`,
    `Мінімум: ${Math.min(...marks)}`,
    `Сума: ${total}`,
    `Середнє: ${(total / marks.length).toFixed(2)}`,
    `Непарні: ${oddValues.join(', ')}`
];
document.getElementById('result').textContent = lines.join('\n');
console.log(lines.join('\n'));
