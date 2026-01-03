// ### 🔹 Non-Mutating (Preferred)

// ```js
// arr.slice()
// arr.concat()
// arr.flat()
// arr.flatMap()
// ```

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.slice(0, 4));
// console.log(arr.slice(4, 1));
// console.log(arr.slice(-1));

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
//console.log(arr1.concat(arr2));

let arr3 = [1, [2, 3], [4, 5, 6], 7];
//console.log(arr3.flat()); //default depth 1

let arr31 = [1, [2], [3], [4, [[5]], 6]];
console.log(arr31.flat(3));

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
//console.log(arr4.flatMap());
