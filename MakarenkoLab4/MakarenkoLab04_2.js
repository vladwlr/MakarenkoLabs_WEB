function getPolygonPerimeter(sideLength, sideCount) { return sideLength * sideCount; }
const side = 7, count = 5;
const perimeter = getPolygonPerimeter(side, count);
document.getElementById('result').innerHTML = `Сторона: <strong>${side}</strong><br>Кількість сторін: <strong>${count}</strong><br>Периметр: <strong>${perimeter}</strong>`;
console.log('Периметр:', perimeter);
