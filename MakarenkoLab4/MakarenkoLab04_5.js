function checkDivisionIf(number, first, second) {
    if (number % first === 0 && number % second === 0) return true;
    return false;
}
function checkDivisionTernary(number, first, second) {
    return number % first === 0 && number % second === 0 ? true : false;
}
function checkDivisionShort(number, first, second) { return !(number % first || number % second); }
const checks = [
    `24 ділиться на 3 і 4: ${checkDivisionIf(24, 3, 4)}`,
    `25 ділиться на 5 і 2: ${checkDivisionTernary(25, 5, 2)}`,
    `30 ділиться на 5 і 6: ${checkDivisionShort(30, 5, 6)}`
];
document.getElementById('result').textContent = checks.join('\n');
console.log(checks.join('\n'));
