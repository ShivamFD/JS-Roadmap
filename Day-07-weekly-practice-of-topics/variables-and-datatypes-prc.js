// ===============================================
// WEEKLY PRACTICE: VARIABLES & DATA TYPES
// 15+ Hard Tasks — Interview-Level
// Run with: node variables-and-datatypes-prc.js
// ===============================================

// Task 1: Convert a string to a number without using parseInt or Number()
const strNum = "123";
let num = 0;
for (let char of strNum) {
  num = num * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
}
console.log(num); // 123
// Explanation: Manually build number by shifting digits (hard ASCII manipulation).

// Task 2: Check if a variable is an array without Array.isArray()
const arr = [1, 2, 3];
const isArray = Object.prototype.toString.call(arr) === "[object Array]";
console.log(isArray); // true
// Explanation: Use toString to check object type (prototype chain knowledge).

// Task 3: Deep clone an object with nested arrays (no JSON.stringify)
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
const original = { a: 1, b: { c: [2, 3] } };
const cloned = deepClone(original);
cloned.b.c[0] = 99;
console.log(original.b.c[0]); // 2 (unchanged)
// Explanation: Recursive cloning handles nested structures (recursion + type checks).

// Task 4: Convert number to binary string without toString(2)
function numToBinary(n) {
  if (n === 0) return "0";
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}
console.log(numToBinary(13)); // "1101"
// Explanation: Manual bit manipulation with loop (bitwise understanding).

// Task 5: Check if value is NaN without isNaN()
const val = NaN;
const isNan = val !== val;
console.log(isNan); // true
// Explanation: NaN is the only value not equal to itself (IEEE floating-point spec).

// Task 6: Merge two objects without Object.assign or spread
function mergeObjects(obj1, obj2) {
  const merged = {};
  for (let key in obj1) merged[key] = obj1[key];
  for (let key in obj2) merged[key] = obj2[key];
  return merged;
}
console.log(mergeObjects({a:1}, {b:2})); // {a:1, b:2}
// Explanation: Manual key copy (handles overwrites).

// Task 7: Convert array to object with indices as keys
const arrToObj = ["x", "y", "z"].reduce((obj, val, i) => {
  obj[i] = val;
  return obj;
}, {});
console.log(arrToObj); // {0: "x", 1: "y", 2: "z"}
// Explanation: Reduce for transformation (functional programming).

// Task 8: Check primitive vs reference type
function isPrimitive(val) {
  return val !== Object(val);
}
console.log(isPrimitive(5)); // true
console.log(isPrimitive({})); // false
// Explanation: Objects coerce to themselves; primitives don't.

// Task 9: Swap two variables without temp or destructuring
let x = 10, y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y); // 20 10
// Explanation: Arithmetic swap (math trick for interviews).

// Task 10: Convert boolean to number (true=1, false=0) without Number()
const boolToNum = true + 0;
console.log(boolToNum); // 1
// Explanation: Coercion: true=1, false=0 in addition.

// Task 11: Check if value is undefined without typeof
function isUndefined(val) {
  return val === void 0;
}
console.log(isUndefined(undefined)); // true
// Explanation: void 0 is always undefined (safe check).

// Task 12: Create BigInt from string without BigInt()
const bigStr = "9007199254740993";
const bigNum = Number(bigStr) > Number.MAX_SAFE_INTEGER ? "BigInt needed" : Number(bigStr);
console.log(bigNum); // "BigInt needed"
// Explanation: Detect precision loss (BigInt intro).

// Task 13: Flatten nested array without flat()
function flatten(arr) {
  return arr.reduce((flat, item) => Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item), []);
}
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
// Explanation: Recursive reduce (handles deep nesting).

// Task 14: Convert object keys to lowercase
const obj = { Name: "Shivam", Age: 21 };
const lowerObj = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]));
console.log(lowerObj); // {name: "Shivam", age: 21}
// Explanation: Entries + map + fromEntries (modern transformation).

// Task 15: Check if number is integer without Number.isInteger()
function isInt(n) {
  return n % 1 === 0;
}
console.log(isInt(5.0)); // true
// Explanation: Modulo check for fractional part.

// Task 16: Generate random string ID without Math.random()
function randomId(len = 8) {
  return Date.now().toString(36).slice(-len);
}
console.log(randomId()); // e.g., "1j2k3l4m"
// Explanation: Timestamp base36 (unique-ish IDs).

// Task 17: Convert string to boolean without Boolean()
const strToBool = str => !!str.match(/^(true|1|yes)$/i);
console.log(strToBool("true")); // true
// Explanation: Double negation + regex match.

// Task 18: Freeze object deeply without Object.freeze recursion
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(name => {
    const prop = obj[name];
    if (typeof prop === "object" && prop !== null) deepFreeze(prop);
  });
  return Object.freeze(obj);
}
// Explanation: Recursive freeze all nested (immutability).

// Task 19: Check if value is null or undefined without ==
const isNullOrUndef = val => val == null;
console.log(isNullOrUndef(null)); // true
// Explanation: Loose equality covers both (shortcut).

// Task 20: Convert array of strings to numbers without map(Number)
const strArr = ["1", "2", "3"];
const numArr = strArr.reduce((acc, s) => acc.concat(+s), []);
console.log(numArr); // [1, 2, 3]
// Explanation: Reduce + unary + (coercion).

console.log("All tasks complete!");