Markdown# Day 13: Hoisting in JavaScript - Detailed Notes

## 1. What is Hoisting?
Hoisting is JavaScript's default behavior of moving **declarations** (not initializations) to the top of their containing scope during the compilation phase (before code execution).

- Only **declarations** are hoisted, not assignments.
- JavaScript has two phases: **Creation/Compilation** (hoisting happens) → **Execution**.

## 2. Variable Hoisting

### With `var`
```javascript
console.log(x); // undefined (not error)
var x = 10;
console.log(x); // 10
// Equivalent to:
JavaScriptvar x;                  // Declaration hoisted
console.log(x);         // undefined
x = 10;                 // Assignment stays
console.log(x);         // 10
With let and const

Declarations are hoisted but not initialized.
They enter Temporal Dead Zone (TDZ) from the start of the block until the declaration is processed.

JavaScriptconsole.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

console.log(b); // ReferenceError
const b = 10;
typeof is safe in TDZ:
JavaScriptconsole.log(typeof temp); // "undefined" (no error)
let temp = "hello";
3. Function Hoisting
Function Declarations
Fully hoisted (both declaration and body).
JavaScriptsayHello(); // Works fine

function sayHello() {
    console.log("Hello!");
}
Function Expressions (including Arrow)
Not hoisted (only var would be hoisted as undefined if used).
JavaScriptsayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};

greet(); // TypeError
const greet = () => console.log("Greetings!");
Named Function Expression (NFE)
JavaScriptconsole.log(func); // function (only inside itself)
var func = function inner() {
    console.log(typeof inner); // function (inner is accessible inside)
};
4. Hoisting Priority & Conflicts
Function vs var
Function declarations win over var.
JavaScriptconsole.log(test); // function (not undefined)

function test() {
    return "function declaration";
}

var test = "variable";
Multiple Function Declarations
Last one wins.
JavaScriptfoo(); // "Second"

function foo() { console.log("First"); }
function foo() { console.log("Second"); }
var vs let/const in same scope
No conflict (different bindings), but let/const not accessible before init.
5. Hoisting in Different Scopes
Global Scope
JavaScriptvar global = "global";
console.log(global); // hoisted in global
Function Scope
Hoisting happens per function.
JavaScriptfunction demo() {
    console.log(a); // undefined
    var a = 100;
}
Block Scope (let/const)
Hoisting happens per block.
JavaScript{
    console.log(x); // ReferenceError (TDZ)
    let x = 5;
}
6. Real-World Examples & Patterns
Example 1: Common Mistake
JavaScriptvar flag = true;
if (flag) {
    console.log(message); // undefined
    var message = "Inside if";
}
console.log(message); // "Inside if" (leaks out)
Example 2: Safe Pattern (use let/const)
JavaScriptlet isReady = true;
if (isReady) {
    let msg = "Ready!";
    console.log(msg);
}
// console.log(msg); // Error (good!)
Example 3: IIFE for Private Scope
JavaScriptvar counter = (function() {
    var count = 0; // Not hoisted to global
    return {
        inc: () => ++count
    };
})();
7. Best Practices

Always declare variables at the top of their scope (even though hoisted).
Prefer let and const over var → avoids hoisting surprises.
Never rely on hoisting for logic.
Place function declarations before calling them (good readability).
Use strict mode: 'use strict'; → catches accidental globals.

8. Common Pitfalls
JavaScript// Pitfall 1: Assuming let/const not hoisted
console.log(typeof x); // "undefined"
let x = 5; // x IS hoisted but in TDZ

// Pitfall 2: Duplicate var declarations
var a = 1;
var a = 2; // Allowed (redeclaration)
console.log(a); // 2

// Pitfall 3: Function expression hoisting
var myFunc;
console.log(myFunc); // undefined
myFunc(); // TypeError
myFunc = function() { console.log("Now defined"); };

// Pitfall 4: Hoisting in loops
for (var i = 0; i < 3; i++) {
    var j = i * 2;
}
console.log(j); // 4 (leaks out)
9. Summary Table








































TypeHoisted?Initialized?Accessible Before Declaration?NotesvarYesundefinedYes (undefined)Function-scopedlet / constYesNo (TDZ)No (ReferenceError)Block-scopedFunction DeclarationYes (full)YesYesCan call before definitionFunction ExpressionOnly var partNoNoBehaves like variable
Hoisting is not a bug — it's how JS works under the hood. Understanding it prevents 90% of confusing bugs!