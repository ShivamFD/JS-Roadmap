
// ### easyTasksSolutions.js

// 1
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// 2
// console.log(y); // ReferenceError
let y = 20;

// 3
greet(); // Works
function greet() {
    console.log("Hello from function declaration");
}

// 4
// sayHi(); // TypeError
var sayHi = function() {
    console.log("Hi");
};

// 5
console.log(typeof temp); // "undefined"
let temp = "safe";

// 6
var dup = 1;
var dup = 2;
console.log(dup); // 2

// 7
console.log(test()); // "function"
function test() { return "function"; }
var test = "var";

// 8
if (true) {
    var inside = "leaks";
}
console.log(inside); // "leaks"

// 9-20 similar simple demos...