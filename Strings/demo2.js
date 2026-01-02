// ### 🔹 Extraction

// ```js
// str.slice(start, end)
// str.substring(start, end)

/*
 * JavaScript String Methods: slice() vs. substring()
 * * | Feature           | str.slice(start, end)         | str.substring(start, end)   |
 * |---------------------|---------------------------------|-------------------------------|
 * | Negative Indices    | Counts backward from the end.   | Treated as 0.                 |
 * | Start > End         | Returns an empty string ("").   | Swaps the arguments.          |
 * | Array Support       | Works on Strings AND Arrays.    | Works ONLY on Strings.        |
 * | End Index           | Up to but NOT including end.    | Up to but NOT including end.  |
 */
const greet = "Hello world!";
console.log(
  "------------------------------slice below-----------------------------"
);
console.log(greet.slice(-1));
console.log(greet.slice(0, 5));
console.log(greet.slice(5, 0));
console.log(
  "------------------------------substring below-----------------------------"
);
console.log(greet.substring(-1));
console.log(greet.substring(0, 5));
console.log(greet.substring(5, 0));
