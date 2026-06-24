let currentValue = 10000;
let divideCount = 0;

while (currentValue >= 50) {
    currentValue = currentValue / 2;
    divideCount++;
}

console.log(`Кількість поділів: ${divideCount}`);
console.log(`Останнє значення: ${currentValue}`);
