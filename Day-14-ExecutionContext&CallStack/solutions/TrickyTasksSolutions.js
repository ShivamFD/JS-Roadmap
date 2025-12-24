// TrickyTasksSolutions.js - Complete Solutions for All 40 Tricky Tasks
// Day 14: Execution Context & Call Stack

console.log("=== Day 14 - Tricky Tasks Solutions ===\n");

// Task 1: Async order
console.log("Task 1:");
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1 → 4 → 3 → 2
// Stack clears → microtasks → macrotasks

// Task 2: this in normal function
console.log("\nTask 2:");
function testThis() {
  console.log(this); // global (non-strict)
}
testThis();

// Task 3: Fix this loss
console.log("\nTask 3:");
const userObj = {
  name: "Alice",
  greet() {
    setTimeout(() => {
      console.log("Hello " + this.name); // Arrow preserves this
    }, 100);
  }
};
userObj.greet(); // "Hello Alice"

// Task 4: Max stack size varies (10k-15k typical in Node/browser)

// Task 5: Closure over multiple ECs
console.log("\nTask 5:");
function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = makeCounter();
console.log(counter(), counter());

// Task 6: Conceptual - EC includes this + vars + scope; Scope is just lookup chain

// Task 7: Deep trace
console.log("\nTask 7:");
function d1() { d2(); }
function d2() { d3(); }
function d3() { d4(); }
function d4() { console.trace(); }
d1();

// Task 8: new Function() limited scope (no closure access)

// Task 9: arguments object
console.log("\nTask 9:");
function argsDemo(a, b, c) {
  console.log(arguments[0], arguments.length);
}
argsDemo(1, 2, 3, 4); // 1 4

// Task 10: Arrow this in method
console.log("\nTask 10:");
const arrowObj = {
  name: "Test",
  arrow: () => console.log(this.name),
  regular() { console.log(this.name); }
};
arrowObj.arrow();   // global/undefined
arrowObj.regular(); // "Test"

// Task 11: Recursive stack growth
function fact(n, depth = 1) {
  console.log(`Depth: ${depth}`);
  if (n <= 1) return 1;
  return n * fact(n - 1, depth + 1);
}
// console.log(fact(5)); // Uncomment to see depth

// Task 12: Async waits for stack to clear

// Task 13: Scope chain
console.log("\nTask 13:");
let outerVar = "outer";
function outerFn() {
  let outerVar = "function";
  function innerFn() {
    console.log(outerVar); // "function"
  }
  innerFn();
}
outerFn();

// Task 14: Event Loop clears stack first

// Task 15: Trampoline simulation
function trampoline(fn) {
  let result = fn();
  while (typeof result === "function") result = result();
  return result;
}

// Task 16: Strict global this
console.log("\nTask 16:");
"use strict";
console.log(this); // undefined

// Task 17: Multi-level closure
console.log("\nTask 17:");
function grandparent() {
  let gp = "GP";
  function parent() {
    let p = "Parent";
    return function child() {
      console.log(gp, p);
    };
  }
  return parent();
}
grandparent()(); // "GP" "Parent"

// Task 18: VariableEnvironment (var/fn) vs LexicalEnvironment (let/const)

// Task 19: call(null)
console.log("\nTask 19:");
function showThis() { console.log(this); }
showThis.call(null); // null (strict) or global (non-strict)

// Task 20: bind creates fixed this
console.log("\nTask 20:");
const boundFn = function() { console.log(this.val); }.bind({ val: 42 });
boundFn(); // 42

// Task 21: Complex async
setTimeout(() => console.log("T1"), 0);
Promise.resolve().then(() => console.log("P1"));
setTimeout(() => console.log("T2"), 0);
Promise.resolve().then(() => console.log("P2"));
// Sync → P1 → P2 → T1 → T2

// Task 22: Error unwinds stack (see stack trace)

// Task 23: Simulated context logger
function logEC(name) {
  console.log(`Task 23: Entering ${name}`);
}

// Task 24: let/const not in VariableEnvironment initially

// Task 25: Function vs var conflict
function conflictDemo() {
  console.log(typeof fn); // "function"
  function fn() {}
  var fn = "var";
}
conflictDemo();

// Task 26: await clears stack temporarily

// Task 27: Simple function tracer
function traced(fn, name) {
  return function(...args) {
    console.log(`→ Enter ${name}`);
    const res = fn(...args);
    console.log(`← Exit ${name}`);
    return res;
  };
}

// Task 28: Outer reference enables closures

// Task 29: Infinite sync loop freezes everything

// Task 30: new creates own this
function Item() { this.created = Date.now(); }
const i = new Item();
console.log("Task 30:", i.created);

// Task 31: eval own context (avoid)

// Task 32: Parameters in VariableEnvironment
function paramDemo(x) {
  console.log(arguments[0] === x); // true
}
paramDemo(5);

// Task 33: Call stack vs queues

// Task 34: Top-level non-strict
(function() {
  console.log("Task 34:", this === globalThis); // true
})();

// Task 35: Dev tools show stack frames

// Task 36: Tail call optimization (not widely implemented)

// Task 37: Nested this + arrow
console.log("\nTask 37:");
const nested = {
  name: "Outer",
  method() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
nested.method(); // "Outer"

// Task 38: Microtasks before repaint/next macro

// Task 39: arguments.callee.caller deprecated

// Task 40: Final complex
console.log("\nTask 40:");
console.log("Sync 1");
setTimeout(() => console.log("Macro"), 0);
Promise.resolve()
  .then(() => console.log("Micro 1"))
  .then(() => console.log("Micro 2"));
console.log("Sync 2");
// Output: Sync 1 → Sync 2 → Micro 1 → Micro 2 → Macro

console.log("\n=== All 40 Tricky Tasks Completed! ===");
console.log("Execution Context aur Call Stack pe full command! 🔥🚀");