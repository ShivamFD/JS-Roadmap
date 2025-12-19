Markdown# Day 12: Scope in JavaScript - Detailed Notes

## 1. What is Scope?
Scope determines the visibility and lifetime of variables and functions in your code. It decides where a variable is accessible and where it is not.

JavaScript has 3 main types of scope:
- Global Scope
- Function Scope
- Block Scope (introduced in ES6 with let/const)

## 2. Global Scope
Variables declared outside any function or block (or with `var` in global context) are in global scope.

```javascript
let globalVar = "I am global";  // Actually not truly global if in module, but in simple scripts yes
var alsoGlobal = "Also global";

function test() {
    console.log(globalVar);     // Accessible
}

test();
console.log(globalVar);         // Accessible anywhere
Warning: Too many global variables cause pollution and bugs.
3. Function Scope (with var)
Variables declared with var inside a function are function-scoped (not block-scoped).
JavaScriptfunction example() {
    var x = 10;
    if (true) {
        var x = 20;  // Same variable! (hoisted to function top)
        console.log(x); // 20
    }
    console.log(x); // 20 (not 10)
}

var is hoisted and function-scoped.
No block scope with var.

4. Block Scope (let & const)
let and const are block-scoped. A block is anything inside { } (if, for, while, etc.).
JavaScript{
    let blockVar = "I am block scoped";
    const PI = 3.14;
    console.log(blockVar); // OK
}

console.log(blockVar); // ReferenceError: blockVar is not defined
Example with loops
JavaScriptfor (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0 1 2
}

for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 3 3 3 (because var is function-scoped)
}
5. Lexical Scope (Static Scope)
JavaScript uses lexical (static) scoping — scope is determined by where the function is written in the code, not where it is called.
JavaScriptlet outer = "I am outer";

function parent() {
    let inner = "I am inner";

    function child() {
        console.log(outer); // Accessible (looks up the scope chain)
        console.log(inner); // Accessible
    }
    child();
}
parent();
Scope Chain
When a variable is used, JS looks:

In current function/block
In parent function/block
Up to global scope

6. Hoisting

var declarations are hoisted (moved to top of function/block) but initialized as undefined.
let and const are hoisted but not initialized → Temporal Dead Zone (TDZ).

JavaScriptconsole.log(a); // undefined (hoisted)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError (TDZ)
const c = 15;
Function declarations are fully hoisted.
7. Temporal Dead Zone (TDZ)
The period from the start of the block until the let/const declaration is processed.
JavaScript{
    // TDZ for name starts here
    console.log(name); // ReferenceError
    let name = "Alice"; // TDZ ends here
}
8. Closures
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.
JavaScriptfunction makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate closure)
Classic Interview Example: Loop + Closure
JavaScript// Wrong way (with var)
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100); // 5 5 5 5 5
}

// Correct ways
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100); // 0 1 2 3 4
}

for (var i = 0; i < 5; i++) {
    ((x) => setTimeout(() => console.log(x), 100))(i);
}
9. Module Scope (Modern JS)
In ES6 modules (files with type="module"), everything is module-scoped (not global).
JavaScript// script.js (module)
let secret = "hidden"; // Not added to window/globalThis
10. Best Practices

Always use let or const (prefer const).
Avoid var.
Minimize global variables.
Use closures carefully (memory leaks possible if large data is captured).
Use IIFE only when needed in old code.
Understand TDZ to avoid bugs.

11. Common Pitfalls
JavaScript// 1. Accidental globals
function bad() {
    accidental = 10; // creates global if not in strict mode
}

// 2. Shadowing
let name = "global";
function test() {
    let name = "local"; // shadows outer
    console.log(name); // "local"
}

// 3. Closure memory leak example
function createLargeClosure() {
    const largeArray = new Array(1000000).fill('data');
    return function() {
        console.log(largeArray.length); // largeArray never garbage collected
    };
}
Scope is the foundation for understanding closures, modules, and many advanced patterns. Master it!