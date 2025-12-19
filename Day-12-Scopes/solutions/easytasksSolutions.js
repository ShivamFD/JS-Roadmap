
// ### easyTasksSolutions.js

// 1
let globalVar = "Global";
function accessGlobal() {
    console.log(globalVar);
}
accessGlobal();

// 2
function funcScope() {
    var x = 10;
}
funcScope();
console.log(typeof x); // undefined (not accessible)

// 3
if (true) {
    let blockVar = "Block";
    console.log(blockVar);
}
// console.log(blockVar); // Error

// 4 & 5
console.log("With var:");
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

console.log("With let:");
for (let j = 0; j < 3; j++) {}
// console.log(j); // Error

// 6
console.log(a); // undefined
var a = 100;

// 7
// console.log(b); // ReferenceError
let b = 200;

// 8
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const c = createCounter();
console.log(c()); // 1
console.log(c()); // 2

// 9
let name = "Global";
function shadow() {
    let name = "Local";
    console.log(name); // Local
}
shadow();

// 10
{
    const PI = 3.14;
    // PI = 3; // TypeError
}

// 11-20 similar simple examples...
// Fix loop with var and setTimeout
for (var k = 0; k < 5; k++) {
    ((x) => setTimeout(() => console.log(x), 100))(k);
}