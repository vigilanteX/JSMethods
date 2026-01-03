// ### 🔹 Searching

// ```js
// arr.includes(value)
// arr.indexOf(value)
// arr.find(fn)
// arr.findIndex(fn)
// ```

let arr = [1, 14, 3, 4, 5, 6, 7, 8, 2];
console.log(arr.includes(3));
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(8));
// Returns the first element in the array that satisfies the given condition.
// Stops searching after the first match
// Returns the element itself, not a boolean
// Returns undefined if no element matches
console.log(
  arr.find(function (x) {
    return x % 2 === 0;
  })
);
//returns index
console.log(
  arr.findIndex(function (x) {
    return x % 2 === 0;
  })
);
