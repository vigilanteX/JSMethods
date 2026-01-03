// ### 🔹 Iteration (MOST IMPORTANT)

// ```js
// arr.forEach(fn)
// arr.map(fn)
// arr.filter(fn)
// arr.reduce(fn, initial)
// arr.some(fn)
// arr.every(fn)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//1-loop all elements
arr.forEach((value, index) => {
  //console.log(value, index);
});
//2-arr.map()
let mapdata = arr.map(function (value, index) {
  return value * 2;
});
//console.log(mapdata);
//3-arr.filter()
let filterds = arr.filter(function (x) {
  return x % 2 === 0;
});
//console.log(filterds);
// let arrReduce = arr.reduce(function (prev, current, currentIndex) {
//   console.log(
//     `Array has previous value as ${prev} and current value as ${current} with index ${currentIndex}`
//   );
//   return prev + current;
// });
// console.log(arrReduce);
// let arrReduce2 = arr.reduce(function (prev, current, currentIndex) {
//   console.log(
//     `Array has previous value as ${prev} and current value as ${current} with index ${currentIndex}`
//   );
//   return prev + current;
// }, 1000);
// console.log(arrReduce2);

//arr.some()-first element matches condition return
let arr2 = [3, 5, 8, 7];
let somefn = arr2.some(function (x, index) {
  console.log(`element is ${x} and index ${index}`);
  return x % 2 === 0;
});
console.log(somefn);

//arr.every()-all elements should match condition
let arr3 = [2, 4, 6, 8];
let somefn2 = arr3.every(function (x) {
  return x % 2 !== 0;
});
console.log(somefn2);
// every()  → returns true only if ALL elements match the condition
// some()   → returns true if AT LEAST ONE element matches the condition
// filter() → returns a NEW array containing ALL elements that match the condition
