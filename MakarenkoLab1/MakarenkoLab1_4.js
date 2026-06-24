const monthNumber = Number(prompt("Введіть номер місяця від 1 до 12"));

const monthNames = [
    "січень", "лютий", "березень", "квітень",
    "травень", "червень", "липень", "серпень",
    "вересень", "жовтень", "листопад", "грудень"
];

function getSeason(month) {
    if ([12, 1, 2].includes(month)) return "зима";
    if ([3, 4, 5].includes(month)) return "весна";
    if ([6, 7, 8].includes(month)) return "літо";
    if ([9, 10, 11].includes(month)) return "осінь";
    return null;
}

const season = getSeason(monthNumber);

if (season) {
    alert(`${monthNames[monthNumber - 1]} — це ${season}`);
} else {
    alert("Такого місяця немає");
}
