const x = { name: "Aman", xyz: "QWERT" };
// JSON.stringify() performs serialization.
// Serialization is the process of converting an in-memory JavaScript object
// into a string format so it can be:
// - stored (file, database, localStorage)
// - transmitted (network, API requests)
// - logged or cached
const stringResult = JSON.stringify(x);
console.log(typeof stringResult, stringResult);
// JSON.parse() performs deserialization.
//
// Deserialization is the process of converting a JSON string
// back into an in-memory JavaScript object so it can be
// used and manipulated by the program.
const objectResult = JSON.parse(stringResult);
console.log(typeof objectResult, objectResult);
