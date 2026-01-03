let a = { name: "aman dixit" };
const b = { age: 200 };
const c = { department: "IT" };
const result = Object.assign(a, b, c); //mutates the target
// console.log(result);
// console.log(a);
const d = { department: "CSE" };
const result2 = Object.assign(a, d); //mutates the target
console.log(a);
const e = { role: "SDE" };
a = { ...e, ...a };
console.log(a);
