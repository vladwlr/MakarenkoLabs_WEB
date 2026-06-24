function isPrime(value) {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) if (value % i === 0) return false;
    return true;
}
function analyzeNumber(value) {
    const lines = [];
    lines.push(value > 0 ? 'Число додатне' : value < 0 ? 'Число відʼємне' : 'Це нуль');
    lines.push(`Просте: ${isPrime(value)}`);
    [2, 3, 5, 6, 9].forEach((divider) => lines.push(`Ділиться на ${divider}: ${value % divider === 0}`));
    return lines;
}
function runCheck() {
    const value = Number(document.getElementById('numberInput').value);
    const lines = analyzeNumber(value);
    document.getElementById('result').textContent = lines.join('\n');
    console.log(lines.join('\n'));
}
document.getElementById('checkBtn').addEventListener('click', runCheck);
runCheck();
