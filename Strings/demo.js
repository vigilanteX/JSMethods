/*
> Strings are **immutable** → methods return **new strings**
### 🔹 Inspection / Search
```js
str.length
str.includes("a")
str.startsWith("He")
str.endsWith("!")
str.indexOf("a")
str.lastIndexOf("a")
*/
const letter = "hello world!";
console.log(letter.length);
console.log(letter.includes("e"));
console.log(letter.startsWith("hel"));
console.log(letter.endsWith("!"));
console.log(letter.indexOf("l"));
console.log(letter.lastIndexOf("l"));
