// Object.freeze() vs Object.seal() — Behavior Summary
//
// Operation               freeze   seal
// --------------------------------------
// Add property             ❌        ❌
// Delete property          ❌        ❌
// Modify existing value    ❌        ✅
// Change descriptors       ❌        ❌
// Shallow operation        ✅        ✅
//
// Notes:
// - Both freeze and seal are SHALLOW (nested objects are not affected)
// - freeze(): fully immutable object (values + structure locked)
// - seal(): structure locked, values can still change
// - Descriptor changes (writable, enumerable, configurable) are blocked in both

// Object.freeze(obj)
// Object.seal(obj)
// Object.isFrozen(obj)
// Object.isSealed(obj)

let obj1 = { name: "Aman", age: 200, DOB: 1000 };
Object.freeze(obj1);
obj1.name = "MOD";
delete obj1.name;
console.log(obj1);

let obj2 = { name: "Aman", age: 200, DOB: 1000 };
Object.seal(obj2);
obj2.name = "MOD";
delete obj2.DOB;
console.log(obj2);

console.log(Object.isFrozen(obj1));
console.log(Object.isSealed(obj2));
