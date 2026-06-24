const dictionary = {
    ua: {
        askDay: "Введіть номер дня тижня: 1-7",
        badLang: "Мова вказана неправильно",
        badDay: "День повинен бути від 1 до 7",
        days: ["понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота", "неділя"]
    },
    en: {
        askDay: "Enter weekday number: 1-7",
        badLang: "Wrong language",
        badDay: "Day must be from 1 to 7",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }
};

let selectedLang = "";
while (!dictionary[selectedLang]) {
    selectedLang = (prompt('Language: ua / en') || '').trim().toLowerCase();
    if (!dictionary[selectedLang]) alert(dictionary.ua.badLang);
}

let selectedDay = 0;
while (selectedDay < 1 || selectedDay > 7) {
    selectedDay = Number(prompt(dictionary[selectedLang].askDay));
    if (selectedDay < 1 || selectedDay > 7) alert(dictionary[selectedLang].badDay);
}

alert(dictionary[selectedLang].days[selectedDay - 1]);
