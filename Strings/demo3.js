// ### 🔹 Transformation

// ```js
// str.toUpperCase()
// str.toLowerCase()
// str.trim()
// str.trimStart()
// str.trimEnd()
// ```
const caps = "HELLO";
const lower = "hello";

console.log(caps.toLowerCase());
console.log(lower.toUpperCase());

const x = " hello world ";
console.log(`before trimming length ${x.length}`);
console.log(`before trimming length ${x.trim().length}`);
console.log(x.trimStart().length);
console.log(x.trimEnd().length);
