//a constant variable that stores today's forecost in kelvin
const kelvin = 293;

//converting kelvin to celcius
const celsius = kelvin - 273;

//now converting celcius to fahrenheit
var fahrenheit = celsius*(9/5)+32;

//rounding off fahrenheit temp.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);