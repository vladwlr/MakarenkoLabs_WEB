function getFormattedDate() {
    const now = new Date();

    const week = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map((part) => String(part).padStart(2, "0"))
        .join(":");

    return `${time}, ${week[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року`;
}

console.log(getFormattedDate());
alert(getFormattedDate());
