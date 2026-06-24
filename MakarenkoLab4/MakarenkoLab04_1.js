function getSecondsFromTime(totalSeconds) { return totalSeconds % 60; }
const total = 3672;
const seconds = getSecondsFromTime(total);
document.getElementById('result').innerHTML = `<strong>${total}</strong> секунд = ${seconds} секунд у поточній хвилині.`;
console.log('Секунди у поточній хвилині:', seconds);
