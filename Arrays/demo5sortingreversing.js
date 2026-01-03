const arr = [100, 4, 55, 2, 1];
//arr.reverse();
//console.log(arr);
function comparator(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}
console.log(arr.sort(comparator));
