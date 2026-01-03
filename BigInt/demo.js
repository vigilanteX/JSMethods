// Number vs BigInt in JavaScript:
//
// Type:
// - Number  → 64-bit floating-point (IEEE 754)
// - BigInt  → Arbitrary-precision integer
//
// Safe Range:
// - Number  → −(2^53 − 1) to 2^53 − 1
// - BigInt  → No practical limit (constrained by memory)
//
// Decimals:
// - Number  → Supported
// - BigInt  → Not supported (integers only)
//
// Performance:
// - Number  → Faster for standard arithmetic
// - BigInt  → Slightly slower for large or complex calculations
//
// Syntax:
// - Number  → 10, 3.14
// - BigInt  → 10n, BigInt(10)

let x = 1234;
console.log(typeof x);
x = BigInt(x);
console.log(typeof x);

//TypeError: Cannot mix BigInt and other types, use explicit conversions
// let y = 123n + 4;
// console.log(y);
