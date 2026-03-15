/**
 * Converts Fahrenheit to Celsius
 * @param {number} f - The temperature in Fahrenheit
 * @returns {number} - The temperature in Celsius
 */
function convertToCelsius(f) {
  const celsius = (f - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // Rounds to 1 decimal place
}

/**
 * Converts Celsius to Fahrenheit
 * @param {number} c - The temperature in Celsius
 * @returns {number} - The temperature in Fahrenheit
 */
function convertToFahrenheit(c) {
  const fahrenheit = (c * (9 / 5)) + 32;
  return Math.round(fahrenheit * 10) / 10; // Rounds to 1 decimal place
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
