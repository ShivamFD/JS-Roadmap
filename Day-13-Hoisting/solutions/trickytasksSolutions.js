// TrickyTasksSolutions.js - Complete Solutions for All 40 Tricky Hoisting Tasks
// Day 13: Hoisting (Variables & Functions)

console.log("=== Day 13 - Hoisting Tricky Tasks Solutions ===\n");

// Task 1
console.log("Task 1:");
console.log(a); // undefined (var hoisted)
var a = 10;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization (TDZ)
let b = 20;
function test() { console.log("test"); }
test(); // "test"

// Task 2
console.log("\nTask 2:");
var x = 1;
function outer() {
    console.log(x); // undefined (inner var x hoisted)
    var x = 2;
    console.log(x); // 2
}
outer();
console.log(x); // 1 (global x unchanged)

// Task 3
console.log("\nTask 3:");
foo(); // "First" → function declaration is hoisted and takes priority
function foo() { console.log("First"); }
var foo = function() { console.log("Second"); };
foo(); // "Second" (now it's the expression)

// Task 4
console.log("\nTask 4:");
console.log(typeof temp); // "undefined" → typeof is safe in TDZ
// console.log(temp); // ReferenceError
let temp = "value";

// Task 5 - Fix hoisting issue
console.log("\nTask 5 (Fixed):");
let nameFixed = "global";
if (true) {
    let nameFixed = "block"; // block-scoped → no leakage
    console.log(nameFixed); // "block"
}
console.log(nameFixed); // "global"

// Task 6 - Self-executing using hoisting
console.log("\nTask 6:");
(function() {
    runNow();
    function runNow() {
        console.log("Self-executed thanks to function hoisting!");
    }
})();

// Task 7 - Classic loop + closure bug due to var hoisting
console.log("\nTask 7:");
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(function() { console.log(i); });
}
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

// Task 8
console.log("\nTask 8:");
console.log(typeof undeclaredVar); // "undefined" → no error for undeclared vars with typeof

// Task 9 - Module pattern to avoid global pollution
console.log("\nTask 9:");
const SafeModule = (function() {
    var privateCounter = 0;
    function increment() { privateCounter++; }
    return {
        inc: () => { increment(); return privateCounter; },
        get: () => privateCounter
    };
})();
console.log(SafeModule.inc()); // 1
console.log(SafeModule.inc()); // 2
console.log(SafeModule.get()); // 2

// Task 10
console.log("\nTask 10:");
function example() {
    return test(); // calls the function declaration (hoisted fully)
    function test() { return "inner function declaration"; }
    var test = function() { return "expression"; };
}
console.log(example()); // "inner function declaration"

// Task 11 - Nested TDZ
console.log("\nTask 11:");
// console.log(innerLet); // ReferenceError (TDZ starts at block beginning)
{
    {
        let innerLet = 42;
        console.log(innerLet); // 42
    }
}

// Task 12 - Hoisting saves the day
console.log("\nTask 12:");
executeEarly();
function executeEarly() {
    console.log("Called before definition — works because of full function hoisting!");
}

// Task 13
console.log("\nTask 13:");
var a13 = 10;
function a13() { console.log("function"); }
console.log(typeof a13); // "number" → var assignment wins in the end

// Task 14 - Classes are NOT hoisted (unlike functions)
// new MyClass(); // ReferenceError
class MyClass {}

// Task 15
console.log("\nTask 15:");
console.log(myVar); // undefined
// console.log(myLet); // ReferenceError (TDZ)
// console.log(myConst); // ReferenceError (TDZ)
var myVar = 1;
let myLet = 2;
const myConst = 3;

// Task 16
console.log("\nTask 16:");
sayHello();
function sayHello() {
    console.log(message); // undefined (var message hoisted inside function)
    var message = "Hi from hoisted function!";
}

// Task 17 - Duplicate function declarations
console.log("\nTask 17:");
duplicateFunc(); // "Second definition wins"
function duplicateFunc() { console.log("First definition"); }
function duplicateFunc() { console.log("Second definition wins"); }

// Task 18 - In ES6 modules, hoisting behaves differently (no globalThis pollution)
// This is conceptual — no code demo here

// Task 19 - Parameters shadow hoisted vars
console.log("\nTask 19:");
function shadowDemo(param) {
    console.log(param); // "passed value"
    var param = "reassigned inside";
    console.log(param); // "reassigned inside"
}
shadowDemo("passed value");

// Task 20 - Weird counter using hoisting
console.log("\nTask 20:");
var weirdCounter = 0;
(function() {
    weirdCounter++; // affects global
    var weirdCounter = 100; // local, doesn't affect global
})();
console.log(weirdCounter); // 1

// Task 21
console.log("\nTask 21:");
(function() {
    console.log(a21); // [Function: a21] → function hoisted over var
    var a21 = 5;
    function a21() { return "function"; }
    console.log(a21); // 5 → var assignment executed
})();

// Task 22 - Function expression vs declaration conflict
console.log("\nTask 22:");
// Function declaration is hoisted, but var assignment overwrites it
function decl22() { console.log("declaration"); }
var decl22 = function() { console.log("expression"); };
decl22(); // "expression"

// Task 23 - Real-world bug from var hoisting
console.log("\nTask 23 (common bug):");
var buttons = ["btn1", "btn2", "btn3"];
for (var i = 0; i < buttons.length; i++) {
    // Imagine adding event listeners
    // All would log 3 because i is hoisted to function scope
}
console.log("Final i:", i); // 3 → leaked outside loop

// Task 24 - Multiple var redeclarations
console.log("\nTask 24:");
var multi = "first";
var multi = "second";
var multi = "third";
console.log(multi); // "third"

// Task 25 - let/const cannot be redeclared
// let dup = 1;
// let dup = 2; // SyntaxError

// Task 26 - const object mutation
console.log("\nTask 26:");
const objConst = { value: 10 };
// objConst = {}; // TypeError
objConst.value = 99; // Allowed
console.log(objConst.value); // 99

// Task 27 - Polyfill-like using hoisting (conceptual)

// Task 28 - Execution order visualization (conceptual)

// Task 29
console.log("\nTask 29:");
console.log(typeof constInTDZ); // "undefined" → typeof safe
// console.log(constInTDZ); // ReferenceError
const constInTDZ = "safe";

// Task 30 - Function in conditional (hoisted anyway in non-strict)
console.log("\nTask 30:");
if (true) {
    function conditionalFunc() {
        console.log("Hoisted even from conditional block!");
    }
}
conditionalFunc(); // Works in loose mode

// Task 31 - Private pattern using hoisting + closure
console.log("\nTask 31:");
const privateModule = (function() {
    internal();
    function internal() {
        console.log("Private function — accessible due to hoisting inside IIFE");
    }
    return {
        public: internal
    };
})();
privateModule.public();

// Task 32 - Final value after conflicts
console.log("\nTask 32:");
var x32 = 1;
var x32 = 2;
function x32() { console.log("func"); }
x32 = 3;
console.log(x32); // 3

// Task 33 - Event listener classic bug
console.log("\nTask 33:");
var elementsSim = [1, 2, 3];
for (var j = 0; j < elementsSim.length; j++) {
    // All handlers would see j = 3
}
console.log("Leaked j:", j); // 3

// Task 34 - Hoisting in try-catch
console.log("\nTask 34:");
try {
    console.log(errVar); // undefined
    var errVar = "error";
    throw "oops";
} catch (e) {
    console.log("Caught:", e); // "oops"
}

// Task 35 - Classic interview question (similar to Task 7)

// Task 36 - Safe wrapper
console.log("\nTask 36:");
const safeWrapper = (() => {
    let safeVar = 42; // block-scoped
    return { get: () => safeVar };
})();
console.log(safeWrapper.get());

// Task 37 - Arrow functions not hoisted
console.log("\nTask 37:");
// arrowEarly(); // TypeError
var arrowEarly = () => console.log("Arrow not hoisted");

// Task 38 - Function inside let impossible
// let blockFunc = function inside() {}; // OK, but no special hoisting

// Task 39 - eval hoisting (avoid in real code)
// eval("console.log('eval hoists too'); var evalVar = 5;");

// Task 40 - Final complex challenge
console.log("\nTask 40 (Complex):");
var finalVar = "initial";
function finalVar() { console.log("function"); }
console.log(typeof finalVar); // "number" or "string" depending on last assignment
finalVar = 999;
console.log(finalVar); // 999

console.log("\n=== All 40 Tricky Hoisting Tasks Completed! ===");
console.log("Hoisting master ban gaye ho aaj! 🚀🔥");