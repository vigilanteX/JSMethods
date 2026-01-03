let x = true;
console.log(typeof x.toString());

/*
Value     | Type      | Why it is Falsy
-----------------------------------------------
false     | Boolean   | The literal false.
0         | Number    | Zero is considered "off" or "empty".
-0        | Number    | Negative zero is treated the same as zero.
0n        | BigInt    | BigInt zero.
""        | String    | An empty string has no content.
null      | Object    | Explicitly represents "nothing".
undefined | Undefined | Value has not been assigned.
NaN       | Number    | A "broken" or invalid number.
*/
//!! double bang
// !!value converts any value to a boolean:
// First !  → coerces value to boolean and negates it
// Second ! → negates again, giving the true boolean equivalent

const value = "aman";
const step1 = !value;
const step2 = !step1;
console.log(step2);
console.log(Boolean(""));
