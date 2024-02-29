const celsiusField = document.querySelector("#celsius");
const convertedField = document.querySelector("#converted"); // New: select the converted temperature element
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

convertBtn.addEventListener("click", function() {
    // Convert temperature based on selected type
    if (tempType.value === "fahrenheit") {
        const convertedTemp = (parseFloat(degree.value) - 32) * (5 / 9);
        celsiusField.textContent = convertedTemp;
        convertedField.textContent = convertedTemp; // Update the converted temperature element
    } else if (tempType.value === "kelvin") {
        const convertedTemp = parseFloat(degree.value) - 273.15;
        celsiusField.textContent = convertedTemp;
        convertedField.textContent = convertedTemp; // Update the converted temperature element
    }
});