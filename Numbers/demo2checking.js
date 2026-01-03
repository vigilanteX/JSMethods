// ### 🔹 Checking (Static)

// ```js
// Number.isInteger(10)
// Number.isNaN(NaN)
// Number.isFinite(100)

console.log(Number.isInteger(12.33));
console.log(Number.isInteger(22));

//NAN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
console.log(Number.isFinite(Infinity));

//global isNaN()- tries to convert string(if input is like string) to number
console.log(isNaN(12));
console.log(isNaN("12"));
console.log(isNaN("aman"));

//Conversion
console.log(typeof Number("123.4"));
console.log(parseInt("133px"));
console.log(parseFloat("123.33px"));
console.log(parseInt("12345"));
console.log(parseFloat("123.33"));
