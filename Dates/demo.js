/*
JavaScript Date — Indexing Breakdown (clear and unambiguous)

Method        | Returns            | Indexing Behavior
--------------|--------------------|------------------------------
getDate()     | Day of month       | Starts at 1 (1–31)
getMonth()    | Month              | Zero-based (0–11)
getDay()      | Day of week        | Zero-based (0–6, Sunday = 0)
getHours()    | Hour               | Value range 0–23 (not indexed)
getMinutes()  | Minutes            | Value range 0–59 (not indexed)
getSeconds()  | Seconds            | Value range 0–59 (not indexed)
getFullYear() | Year               | Actual year (e.g., 2026)

Key rule:
- "Zero-based" means the value starts at 0 by design (month, day-of-week).
- "Value range starting at 0" does NOT mean zero-indexed (time components).
*/

let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getTime());

console.log(date.toISOString()); //2026-01-03T11:10:07.920Z
console.log(date.toLocaleDateString()); //1/3/2026
console.log(date.toLocaleString()); //1/3/2026, 4:40:07 PM
