function convertTemperature() {
    const output = document.getElementById('answer');
    const celsius = Number(document.getElementById('celsiusValue').value);
    const fahrenheit = celsius * 9 / 5 + 32;

    output.textContent = `${celsius} °C = ${fahrenheit.toFixed(1)} °F`;
}

convertTemperature();
