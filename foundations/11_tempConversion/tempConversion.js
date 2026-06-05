const convertToCelsius = function(tempFahr) {
  const celsius = (tempFahr - 32) / 1.8;
  return Number.isInteger(celsius) ? celsius : Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(tempCelsius) {
  const fahrenheit = (tempCelsius * 1.8) + 32;
  return Number.isInteger(fahrenheit) ? fahrenheit : Number(fahrenheit.toFixed(1));
};

console.log(convertToCelsius(100)) // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(100)) // celsius to fahrenheit, should return 32


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
