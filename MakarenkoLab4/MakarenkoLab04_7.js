function makeMatrix() {
    const matrix = [];
    for (let row = 0; row < 5; row++) {
        matrix[row] = [];
        for (let col = 0; col < 5; col++) matrix[row][col] = Math.floor(Math.random() * 21) - 10;
    }
    return matrix;
}
function matrixToTable(matrix, title) {
    return `<div class="matrix"><table><caption>${title}</caption>${matrix.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</table></div>`;
}
const matrix = makeMatrix();
const changed = matrix.map(row => row.slice());
for (let i = 0; i < changed.length; i++) changed[i][i] = changed[i][i] < 0 ? 0 : 1;
document.getElementById('result').innerHTML = matrixToTable(matrix, 'Було') + matrixToTable(changed, 'Після заміни діагоналі');
console.table(matrix); console.table(changed);
