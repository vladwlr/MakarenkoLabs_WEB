const primes = [];

function isPrimeNumber(value) {
    if (value < 2) return false;

    for (let divisor = 2; divisor <= Math.sqrt(value); divisor++) {
        if (value % divisor === 0) return false;
    }

    return true;
}

for (let number = 2; number <= 100; number++) {
    if (isPrimeNumber(number)) primes.push(number);
}

console.log("Прості числа від 2 до 100:");
console.log(primes.join(", "));
