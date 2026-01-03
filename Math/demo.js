/*
Method         | What it does
---------------|---------------------------------------------------------
Math.round(x)  | Rounds to nearest integer
               | ≥ .5 rounds UP, < .5 rounds DOWN

Math.floor(x)  | Rounds DOWN to the nearest integer
               | Always moves toward -Infinity

Math.ceil(x)   | Rounds UP to the nearest integer
               | Always moves toward +Infinity

Math.trunc(x)  | Removes the decimal part
               | Rounds toward 0 (no rounding logic)

Math.max(...)  | Returns the largest value from given numbers
               | Accepts multiple arguments

Math.min(...)  | Returns the smallest value from given numbers
               | Accepts multiple arguments

Math.random()  | Returns a pseudo-random number
               | Range: 0 (inclusive) → 1 (exclusive)

Math.sqrt(x)   | Returns square root of x
               | x must be ≥ 0, otherwise NaN

Math.pow(a, b) | Returns a raised to power b
               | Equivalent to: a ** b
*/

console.log(Math.ceil(12.2));
console.log(Math.floor(12.2));
console.log(Math.round(12.4));
console.log(Math.round(12.5));
console.log(Math.trunc(12.44));
console.log(Math.max(1, 2, 3, 4, 5, 6, 6));
console.log(Math.min(1, 2, 3, 4, 5, 6, 6));
console.log(Math.random()); //Range: 0 (inclusive) → 1 (exclusive)
console.log(Math.sqrt(4));
console.log(Math.pow(2, 3));
