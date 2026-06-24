const celsius = Number(prompt("Температура в градусах Цельсія"));
const fahrenheit = celsius * 9 / 5 + 32;

alert(`${celsius} °C = ${fahrenheit.toFixed(1)} °F`);
console.log("Переведення температури виконано");
