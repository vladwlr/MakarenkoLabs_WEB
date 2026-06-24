const weekData = {
    ua: {
        title: 'Українська мова',
        badDay: 'Потрібно ввести число від 1 до 7.',
        days: ['понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота', 'неділя']
    },
    en: {
        title: 'English',
        badDay: 'Enter a number from 1 to 7.',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
};

const langSelect = document.getElementById('lang');
const dayInput = document.getElementById('day');
const answer = document.getElementById('answer');
const showButton = document.getElementById('showDay');

function showWeekday() {
    const lang = langSelect.value;
    const dayNumber = Number(dayInput.value);
    const current = weekData[lang];

    if (dayNumber < 1 || dayNumber > 7 || Number.isNaN(dayNumber)) {
        answer.innerHTML = `<b>${current.title}:</b> ${current.badDay}`;
        return;
    }

    answer.innerHTML = `<span class="pill">${current.title}</span><br><br>День №${dayNumber}: <b>${current.days[dayNumber - 1]}</b>`;
}

showButton.addEventListener('click', showWeekday);
showWeekday();
