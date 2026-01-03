// ### 🔹 Add / Remove

// ```js
// arr.push()
// arr.pop()
// arr.shift()
// arr.unshift()
// arr.splice()
let arr = [1, 2, 3, 4, 5, 6];
// arr.push(7);
// console.log(arr);

// arr.pop();
// console.log(arr);

//arr.shift():removes first element
arr.shift();
//console.log(arr);
arr.unshift(100);
//console.log(arr);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
/*
Parameters

startIndex
Index at which to start changing the array
(negative values count from the end)
deleteCount
Number of elements to remove
0 → remove nothing
omitted → remove all elements from startIndex onward
itemsToAdd (optional)
Elements to insert at startIndex
*/
//console.log(arr2.splice(3));-delete all elements 3rd index onwards
//console.log(arr2.splice(0, 0, 9, 9, 9));-at zeroth index, delete nothing, start adding 9,9,9 starting zeroth index
