
// # 💻 **DAY 1 — solutions.js (Clean Code)**


// Task 1
let name = "Shivam";
console.log("Name:", name);

// Task 2
let age = 20;
let city = "Mumbai";
let isStudent = true;
console.log(age, city, isStudent);

// Task 3
const PI = 3.14;
// PI = 3.14159; // ❌ TypeError
console.log(PI);

// Task 4
console.log(typeof 19);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // object (bug)

// Task 5
let value;
console.log(typeof value);

// Task 6 (Swap using third variable)
let a = 10, b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// Task 7 (Swap without third variable)
let x = 5, y = 8;
[x, y] = [y, x];
console.log(x, y);

// Task 8 (var is function scoped)
if (true) {
  var testVar = "Hello from var";
}
console.log(testVar); // Works

// Task 9 (let is block scoped)
if (true) {
  let testLet = "Hello from let";
}
// console.log(testLet); // ❌ ReferenceError

// Task 10
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr);
