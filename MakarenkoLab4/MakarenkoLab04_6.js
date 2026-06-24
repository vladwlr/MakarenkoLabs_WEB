const marks = [8, 12, 5, 10, 7, 11, 9];
const oddValues = marks.filter((value) => value % 2 !== 0);
const total = marks.reduce((sum, value) => sum + value, 0);

console.log("Масив:", marks);
console.log("Максимум:", Math.max(...marks));
console.log("Мінімум:", Math.min(...marks));
console.log("Сума:", total);
console.log("Середнє:", (total / marks.length).toFixed(2));
console.log("Непарні:", oddValues);
