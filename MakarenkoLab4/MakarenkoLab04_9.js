function isPrime(value) {
    if (value < 2) return false;

    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false;
    }

    return true;
}

function analyzeNumber(value) {
    console.log(value > 0 ? "додатне" : value < 0 ? "відʼємне" : "нуль");
    console.log("просте:", isPrime(value));

    [2, 3, 5, 6, 9].forEach((divider) => {
        console.log(`ділиться на ${divider}:`, value % divider === 0);
    });
}

analyzeNumber(45);
