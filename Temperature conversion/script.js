function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid temperature.";
        return;
    }

    switch (unit) {
        case 'Celsius':
            celsius = temperature;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            document.getElementById('result').innerHTML = `
                ${celsius.toFixed(2)} Celsius is equivalent to:
                <br> ${fahrenheit.toFixed(2)} Fahrenheit
                <br> ${kelvin.toFixed(2)} Kelvin
            `;
            break;
        case 'Fahrenheit':
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            document.getElementById('result').innerHTML = `
                ${fahrenheit.toFixed(2)} Fahrenheit is equivalent to:
                <br> ${celsius.toFixed(2)} Celsius
                <br> ${kelvin.toFixed(2)} Kelvin
            `;
            break;
        case 'Kelvin':
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            document.getElementById('result').innerHTML = `
                ${kelvin.toFixed(2)} Kelvin is equivalent to:
                <br> ${celsius.toFixed(2)} Celsius
                <br> ${fahrenheit.toFixed(2)} Fahrenheit
            `;
            break;
        default:
            document.getElementById('result').innerText = "Please select a valid unit.";
            return;
    }
}
