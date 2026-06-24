const weekDays = {
    1: 'понеділок',
    2: 'вівторок',
    3: 'середа',
    4: 'четвер',
    5: 'пʼятниця',
    6: 'субота',
    7: 'неділя'
};

function showWeekDay() {
    const output = document.getElementById('answer');
    const dayNumber = Number(document.getElementById('dayValue').value);
    output.textContent = weekDays[dayNumber] || 'Невірний номер дня. Треба число від 1 до 7.';
}

showWeekDay();
