# Day 14: Execution Context & Call Stack in JavaScript  
**Super Important Topic – The Heart of How JavaScript Runs Code**

---

## 1. What is Execution Context?

An **Execution Context (EC)** is an abstract internal environment created by the JavaScript engine every time code is executed.  
It keeps track of:
- Where we are in the code
- Variables, functions, `this`, scope chain
- Execution progress

### Types of Execution Contexts
| Type                        | When Created                              | Notes                                      |
|-----------------------------|-------------------------------------------|--------------------------------------------|
| **Global Execution Context** | Once, when script starts                  | Only one (unless modules)                  |
| **Function Execution Context** | Every time a function is invoked         | One per function call                      |
| **Eval Execution Context**   | Inside `eval()` (rare, avoid)             | Has own context                            |

---

## 2. Two Phases of Every Execution Context

Every EC has **two phases**:

### 1. Creation Phase (Before code runs)
| Action                              | What Happens                                                                 |
|-------------------------------------|------------------------------------------------------------------------------|
| **Variable Object (VO) Creation**   | - `var` declarations → hoisted + initialized to `undefined`<br>- Function declarations → fully hoisted (name + body)<br>- `arguments` object created (for functions) |
| **Scope Chain Creation**            | Links to outer lexical environment (enables closures)                        |
| **this Binding**                    | Determines `this` value based on how function is called                      |

> **Important**: `let` & `const` are hoisted but **not initialized** → enter **Temporal Dead Zone (TDZ)**

### 2. Execution Phase
- Line-by-line code execution
- Assignments happen
- `let`/`const` initialized
- Functions called → new EC pushed to stack

---

## 3. Structure of an Execution Context (Modern Spec)

```js
ExecutionContext = {
  LexicalEnvironment: {          // For let, const, classes, blocks
    EnvironmentRecord: { ...variables... },
    Outer: <reference to parent LexicalEnvironment>
  },
  VariableEnvironment: {         // For var, function declarations
    EnvironmentRecord: { ...var + functions... },
    Outer: <same as above in most cases>
  },
  ThisBinding: this value
}




4. Call Stack (Execution Stack)
JavaScript is single-threaded → only one call stack (LIFO - Last In, First Out).
How It Works

Step,                   Action
Script starts,     Global EC pushed onto stack
Function called,   New Function EC pushed
Function returns,  Its EC popped
All done,            Stack empty



Example Call Stack Flow

function a() { b(); }
function b() { c(); }
function c() { console.log("Bottom"); }
a();



Call Stack Evolution:
1. [ Global ]
2. [ Global → a() ]
3. [ Global → a() → b() ]
4. [ Global → a() → b() → c() ]   ← console.log runs
5. [ Global → a() → b() ]         ← c() returns
6. [ Global → a() ]                ← b() returns
7. [ Global ]                     ← a() returns
8. [ empty ]                      ← script ends

Use console.trace() to see current stack in console!



5. this Binding Rules (Determined in Creation Phase)

Call Type,this Value,Example
Global code,globalThis (window in browser),console.log(this) → window
Normal function call (non-strict),globalThis,fn() → window
Normal function (strict mode),undefined,"""use strict""; fn() → undefined"
Object method,The object,obj.method() → obj
Constructor (new),Newly created object,new Person() → new instance
Arrow function,Inherits this from outer lexical scope,No own this binding
.call() / .apply() / .bind(),Explicitly passed value,fn.call(obj) → obj



common example:

const obj = {
  name: "Obj",
  regular: function() { console.log(this.name); },   // "Obj"
  arrow: () => console.log(this.name)               // undefined / global
};
obj.regular(); // "Obj"
obj.arrow();   // not "Obj" → arrow takes outer this


6. Real-World Examples
Example 1: Scope Chain + Closure
JavaScriptlet global = "I'm global";

function outer() {
  let out = "outer";
  function inner() {
    let inn = "inner";
    console.log(global, out, inn); // Works via scope chain
  }
  inner();
}
outer();
Example 2: Stack Overflow (Infinite Recursion)
JavaScriptfunction boom() {
  boom(); // Maximum call stack size exceeded
}
boom();
Example 3: this Loss in Callback
JavaScriptconst user = {
  name: "Alice",
  greet() {
    setTimeout(function() {
      console.log(this.name); // undefined / window → lost this
    }, 100);
  }
};

// Fix with arrow
greet() {
  setTimeout(() => {
    console.log(this.name); // "Alice" → arrow preserves this
  }, 100);
}

7. Best Practices

Prefer let/const → avoids hoisting surprises in creation phase
Use arrow functions when you want to preserve this
Use .bind(), arrow, or let self = this to fix this loss
Avoid deep recursion (prefer loops or async patterns)
Use console.trace() for debugging stack
Never block the call stack (no heavy sync operations)


8. Common Pitfalls






























PitfallWhy It HappensFixthis becomes undefined/window in callbacksNormal functions lose object referenceUse arrow or bindStack overflow in recursionToo many FECs pushedAdd base case or use trampolineAssuming sync code runs after asyncCall stack must clear before callbacksUnderstand Event LoopForgetting let in TDZ during creation phaseAccessed before initializationDeclare before use

9. Mental Model – Visual Summary
textCall Stack (LIFO)
┌────────────────────┐
│   Current Function │ ← Running now
├────────────────────┤
│   Caller Function  │
├────────────────────┤
│   Global Context   │
└────────────────────┘

Each box = One Execution Context
Contains: Variables + Scope Chain + this
Key Takeaway:
Execution Context tells "what variables and this I have"
Call Stack tells "in what order functions are running"
Master these two → you understand:

Closures
this behavior
Async (Event Loop interaction)
Debugging stack traces
Memory leaks

You are now inside the JavaScript engine! 🚀