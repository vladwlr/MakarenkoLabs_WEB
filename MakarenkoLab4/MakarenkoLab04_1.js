function getSecondsFromTime(totalSeconds) {
    return totalSeconds % 60;
}

console.log("Секунди у поточній хвилині:", getSecondsFromTime(3672));
