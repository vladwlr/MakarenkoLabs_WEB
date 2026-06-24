function checkDivisionIf(number, first, second) {
    if (number % first === 0 && number % second === 0) {
        return true;
    }
    return false;
}

function checkDivisionTernary(number, first, second) {
    return number % first === 0 && number % second === 0 ? true : false;
}

function checkDivisionShort(number, first, second) {
    return !(number % first || number % second);
}

console.log(checkDivisionIf(24, 3, 4));
console.log(checkDivisionTernary(25, 5, 2));
console.log(checkDivisionShort(30, 5, 6));
