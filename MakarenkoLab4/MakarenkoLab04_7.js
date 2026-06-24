const matrix = [];

for (let row = 0; row < 5; row++) {
    matrix[row] = [];
    for (let col = 0; col < 5; col++) {
        matrix[row][col] = Math.floor(Math.random() * 21) - 10;
    }
}

console.table(matrix);

for (let i = 0; i < matrix.length; i++) {
    matrix[i][i] = matrix[i][i] < 0 ? 0 : 1;
}

console.table(matrix);
