const monthNames = [
    'січень', 'лютий', 'березень', 'квітень',
    'травень', 'червень', 'липень', 'серпень',
    'вересень', 'жовтень', 'листопад', 'грудень'
];

function getSeasonName(month) {
    if ([12, 1, 2].includes(month)) return 'зима';
    if ([3, 4, 5].includes(month)) return 'весна';
    if ([6, 7, 8].includes(month)) return 'літо';
    if ([9, 10, 11].includes(month)) return 'осінь';
    return null;
}

function showMonthInfo() {
    const output = document.getElementById('answer');
    const month = Number(document.getElementById('monthValue').value);
    const season = getSeasonName(month);

    output.textContent = season
        ? `${monthNames[month - 1]} — це ${season}`
        : 'Такого місяця немає. Треба число від 1 до 12.';
}

showMonthInfo();
