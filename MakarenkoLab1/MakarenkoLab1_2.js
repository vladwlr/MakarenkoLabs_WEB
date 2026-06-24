let n = 0;
const rows = [];

do {
    let label = "непарне число";

    if (n === 0) {
        label = "нуль";
    } else if (n % 2 === 0) {
        label = "парне число";
    }

    rows.push(`${n} - ${label}`);
    n++;
} while (n <= 10);

console.log(rows.join("\n"));
