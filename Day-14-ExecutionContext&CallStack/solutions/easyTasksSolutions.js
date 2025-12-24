// easyTasksSolutions.js - Solutions for all 20 Easy Tasks

console.log("=== Day 14 - Easy Tasks Solutions ===\n");

// Task 1: Simple script - mental trace
console.log("Task 1: Global → script running");

// Task 2: this in nested function
function outer() {
  console.log("Task 2 - Outer this:", this);
  function inner() {
    console.log("Inner this:", this); // global (non-strict)
  }
  inner();
}
outer();

// Task 3: console.trace()
function level1() {
  level2();
}
function level2() {
  level3();
}
function level3() {
  console.log("Task 3:");
  console.trace(); // Shows full stack: level3 → level2 → level1 → global
}
level1();

// Task 4: Global variable access from deep nest
let globalVar = "I'm global!";
function deep1() {
  function deep2() {
    function deep3() {
      console.log("Task 4:", globalVar); // Accessible via scope chain
    }
    deep3();
  }
  deep2();
}
deep1();

// Task 5: var in creation phase
console.log("Task 5:");
var demoVar; // hoisted in creation phase
console.log(demoVar); // undefined

// Task 6: this in global
console.log("Task 6 - Global this:", this); // globalThis / window

// Task 7: Normal function this
function normalFn() {
  console.log("Task 7 - Normal fn this:", this);
}
normalFn(); // global in non-strict

"use strict";
function strictFn() {
  console.log("Strict fn this:", this); // undefined
}
strictFn();

// Task 8: Object method this
const person = {
  name: "Alice",
  greet() {
    console.log("Task 8:", this.name);
  }
};
person.greet(); // "Alice"

// Task 9: Arrow as method
const badArrow = {
  name: "Bob",
  arrowGreet: () => console.log("Task 9:", this.name), // global this
  regularGreet() { console.log(this.name); }
};
badArrow.arrowGreet(); // undefined or global
badArrow.regularGreet(); // "Bob"

// Task 10: Recursive factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("Task 10:", factorial(5)); // 120

// Task 11: Execution order
console.log("Task 11: Before call");
function sayHi() {
  console.log("Inside function");
}
sayHi();
console.log("After call");

// Task 12: setTimeout 0 delay
console.log("Task 12: Start");
setTimeout(() => console.log("Timeout callback"), 0);
console.log("End"); // Start → End → Timeout

// Task 13: Three nested functions
function outerMost() {
  console.log("Task 13: outerMost");
  middle();
}
function middle() {
  console.log("middle");
  innerMost();
}
function innerMost() {
  console.log("innerMost");
}
outerMost();

// Task 14: Scope chain shadowing
let value = "global";
function shadowTest() {
  let value = "function scope";
  function inner() {
    let value = "inner";
    console.log("Task 14:", value); // "inner"
  }
  inner();
}
shadowTest();

// Task 15: bind to fix this
const user = {
  name: "Charlie",
  delayedGreet() {
    setTimeout(function() {
      console.log("Task 15:", this.name);
    }.bind(this), 100); // bind preserves this
  }
};
user.delayedGreet(); // "Charlie"

// Task 16: Constructor with new
function Car(model) {
  this.model = model;
}
const myCar = new Car("Tesla");
console.log("Task 16:", myCar.model); // "Tesla"

// Task 17: Function declaration available early
earlyCall(); // Works due to creation phase
function earlyCall() {
  console.log("Task 17: Called before definition");
}

// Task 18: let in TDZ
function tdzDemo() {
  // console.log(secret); // ReferenceError
  let secret = "hidden";
}

// Task 19: Stack overflow example (commented)
// function boom() { boom(); }
// boom(); // Uncomment → Maximum call stack size exceeded

// Task 20: this in different contexts
console.log("Task 20:");
console.log("Global:", this);
function globalFn() { console.log("Function:", this); }
globalFn();
const objThis = { method() { console.log("Method:", this); } };
objThis.method();

console.log("\nAll 20 Easy Tasks Completed!");