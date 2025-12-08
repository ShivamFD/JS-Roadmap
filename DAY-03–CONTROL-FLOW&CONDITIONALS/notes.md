Markdown# 📘 DAY 3 – CONTROL FLOW & CONDITIONALS 

## 1. if Statement
The most basic conditional. Executes a block only if the condition is `true`.

```js
if (condition) {
  // code runs if condition is truthy
}

let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}
2. else Statement
Provides an alternative block when the if condition is false.
JavaScriptif (condition) {
  // true branch
} else {
  // false branch
}

let age = 15;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
3. else if Statement
Allows checking multiple conditions in sequence.
JavaScriptlet score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
Important: Only the first true block runs. Subsequent conditions are skipped.
4. Nested Conditionals
if/else inside another if/else. Useful but can get messy.
JavaScriptlet age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You need a license");
  }
} else {
  console.log("Too young to drive");
}
Tip: Avoid deep nesting → prefer early returns or logical operators when possible.
5. Comparison Operators

OperatorMeaningExample==loose equality5 == "5" → true===strict equality5 === "5" → false!=loose inequality!==strict inequality>greater than<less than>=greater than or equal<=less than or equal
Always prefer === and !== to avoid type coercion bugs.
6. Logical Operators

OperatorNameBehavior&&ANDReturns first falsy or the last value``!NOTInverts truthiness??Nullish CoalescingReturns right side only if left is null/undefined
JavaScripttrue && "hello"   // → "hello"
false && "hello"  // → false
true || "hello"   // → true
false || "hello"  // → "hello"

null ?? "default"   // → "default"
undefined ?? "default" // → "default"
0 ?? "default"      // → 0   (0 is not nullish!)

7. Truthy & Falsy Values
JavaScript coerces values to boolean in conditions.
Falsy values (only 7):
JavaScriptfalse, 0, -0, 0n, "", null, undefined, NaN
Everything else is Truthy:
JavaScript"0", "false", [], {}, function(){}, new Date(), 12n, etc.
JavaScriptif (0) console.log("never runs");
if ("") console.log("never runs");
if ([]) console.log("runs! array is truthy");
8. Conditional (Ternary) Operator
Shorthand for simple if-else.
JavaScriptcondition ? valueIfTrue : valueIfFalse

let message = age >= 18 ? "Adult" : "Minor";

let price = isMember ? total * 0.9 : total;  // 10% discount
Can be chained (but avoid too much):
JavaScriptlet grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
9. Switch Statement
Great for checking one value against many constants.
JavaScriptswitch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
Don't forget break → otherwise fall-through happens!
Modern alternative: switch expression (with objects or if-else)
10. Short-Circuit Evaluation
&& and || don't always evaluate the right side.
JavaScriptisLoggedIn && console.log("Welcome back");     // logs only if true
isLoggedIn || console.log("Please log in");    // logs only if false

// Common pattern: default values before &&
let name = user.name && user.name.trim();  // prevents error if user is null
11. Guard Clauses (Early Returns)
Prefer flat code over deep nesting.
Bad (pyramid of doom):
JavaScriptif (user) {
  if (user.isActive) {
    if (user.role === "admin") {
      // do admin stuff
    }
  }
}
Good (guard clauses):
JavaScriptif (!user) return;
if (!user.isActive) return;
if (user.role !== "admin") return;

// now safe to do admin stuff
12. Input Validation Patterns
Basic:
JavaScriptfunction divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
With guard clauses:
JavaScriptfunction getUserName(user) {
  if (!user) return "Guest";
  if (typeof user.name !== "string") return "Unknown";
  return user.name.trim() || "Anonymous";
}
Using nullish coalescing + optional chaining:
JavaScriptconst name = user?.profile?.name ?? "Default Name";

13. Common Pitfalls & Gotchas

PitfallExampleFixUsing == instead of ===if (score == "90") → trueAlways use strict equalityForgetting break in switchfall-through bugsAdd break or use objects/mapsDeep nesting5+ levels of ifUse guard clauses or extract functionsRelying on truthy for empty checkif (arr) → true even if emptyUse arr.length > 0&& with non-boolean values0 && doSomething() → skippedBe aware of short-circuit behavior
Summary Cheat Sheet
JavaScript// Preferred patterns
if (condition) return;                    // guard clause
value = condition ? a : b;                // ternary
value = obj?.prop ?? "default";           // safe access + default
isValid && runSideEffect();               // short-circuit side effects
value = stored || defaultValue || "fallback"; // OR chain (careful with 0, "")
You now mastered control flow in JavaScript!
Next → Loops & Iteration (Day 4)
Happy coding! 🚀
textSave this as `notes.md` and open it in any Markdown viewer (VS Code, Obsidian, Typora, etc.). Enjoy your learning journey!1.4sFasti want it with definition also u gave me only example but where is theory part or definition partHere’s your complete, professional, and deeply detailed notes.md with proper definitions, theory, explanations, when to use, pros/cons, and real-world best practices — exactly what serious learners and interviewers expect.
Markdown# DAY 3 – CONTROL FLOW & CONDITIONALS  
**Full Theoretical + Practical Deep Dive (with Definitions, Rules & Best Practices)**

---

### 1. What is Control Flow?
**Definition**: Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated in a program.

JavaScript is executed **top-to-bottom** by default.  
**Conditional statements** allow us to **change this order** based on runtime conditions.

---

### 2. `if` Statement

**Definition**: Executes a block of code **only if** a specified condition evaluates to `true`.

**Syntax**:
```js
if (condition) {
  // code to execute
}
Theory:

The condition is coerced to boolean using Truthy/Falsy rules.
If condition is true → block runs.
If condition is false → block is skipped.

When to use: Simple yes/no decisions.

3. else Statement
Definition: Provides an alternative block that runs when the if condition is false.
Syntax:
JavaScriptif (condition) {
  // true branch
} else {
  // false branch
}
Theory:

Exactly one of the two blocks will run.
else is optional but must immediately follow an if or else if.


4. else if Statement
Definition: Allows checking multiple mutually exclusive conditions in sequence.
Syntax:
JavaScriptif (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  // ...
} else {
  // fallback
}
Important Rule:
Only the first true block executes → then the entire chain is exited (no further checks).
Best Practice: Order conditions from most specific → most general.

5. Nested Conditionals
Definition: Placing an if statement inside another if block.
Pros: Full control over complex logic
Cons: Leads to "pyramid of doom", hard to read/maintain
Avoid deep nesting → prefer guard clauses (see section 11)

6. Comparison Operators


OperatorNameCoercion?Recommended?Example==Loose EqualityYesNo5 == "5" → true===Strict EqualityNoYes5 === "5" → false!=Loose InequalityYesNo!==Strict InequalityNoYes> < >= <=RelationalYes (numbers/strings)Yes
Rule of Thumb: Always use === and !== in production code.

7. Logical Operators



































OperatorNameReturnsShort-Circuits?&&Logical ANDFirst falsy value or last valueYes``Logical OR!Logical NOTBoolean oppositeNo??Nullish CoalescingRight side only if left is null or undefinedYes
Key Difference:
JavaScript0 || "default"     // → "default"  (0 is falsy)
0 ?? "default"     // → 0          (0 is NOT nullish)
Use ?? when 0, "", false are valid values.
text---

### 8. Truthy vs Falsy Values

**Definition**: When a non-boolean value is used in a boolean context (like `if`), JavaScript coerces it.

**Falsy values (only 7)**:
```js
false, 0, -0, 0n, "", null, undefined, NaN
Everything else is Truthy:
JavaScript"0", "false", [], {}, function(){}, Infinity, new Date(), etc.
Common Mistake:
JavaScript```js
const items = [];
if (items) { ... }        // runs! [] is truthy
// Wrong way to check empty array

// Correct:
if (items.length > 0) { ... }
if (items.length) { ... } // also works

9. Conditional (Ternary) Operator ? :
Definition: The only ternary operator in JS. Shorthand for simple if-else.
Syntax:
JavaScriptcondition ? exprIfTrue : exprIfFalse
Use Cases:

Inline assignments
JSX/React conditional rendering
Simple value selection

Chaining (use sparingly):
JavaScriptconst grade = score >= 90 ? "A" :
              score >= 80 ? "B" :
              score >= 70 ? "C" : "F";
Never do this:
JavaScript// Anti-pattern: too complex
const result = a ? b ? c ? d : e : f : g;

10. switch Statement
Definition: Multi-way branch based on the exact value of an expression.
Syntax:
JavaScriptswitch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // fallback
}
Key Rules:

Uses strict equality (===) for comparison
break is mandatory (except intentional fall-through)
default is optional but recommended

Modern Alternative (cleaner):
JavaScriptconst grades = {
  90: "A", 80: "B", 70: "C", 60: "D"
};
const grade = grades[Math.floor(score / 10) * 10] || "F";

11. Short-Circuit Evaluation
Definition: Logical operators stop evaluating as soon as the result is determined.
Practical Uses:
JavaScript// Only call expensiveFn() if user exists
user && expensiveFn(user);

// Only show banner if not dismissed
!dismissed && showBanner();

// Default parameters (old way)
function greet(name) {
  name = name || "Guest";
  console.log("Hi", name);
}

12. Guard Clauses (Early Returns)
Definition: Immediately return/exit from a function when invalid conditions are met.
Before (bad):
JavaScriptfunction processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.role === "admin") {
        // actual logic
      }
    }
  }
}
After (good):
JavaScriptfunction processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (user.role !== "admin") return;

  // Now safe to proceed with admin logic
}
Benefits:

Flatter code
Easier to read
Fewer bugs


13. Input Validation Patterns
**Pattern 1: Throw early
JavaScriptfunction divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new TypeError("Arguments must be numbers");
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
Pattern 2: Safe access with optional chaining + nullish
JavaScriptconst userName = user?.profile?.name ?? "Anonymous";
Pattern 3: Validate and return default
JavaScriptfunction getStatus(user) {
  if (!user || typeof user.status !== "string") return "offline";
  return user.status.toLowerCase();
}

14. Common Pitfalls Summary


PitfallWhy It's BadCorrect WayUsing ==Unexpected type coercionUse ===Forgetting break in switchFall-through bugsAlways add breakDeep nesting (>3 levels)Hard to read, test, maintainUse guard clausesif (array) to check empty[] is truthyUse array.length > 0`value"default"` with 0Complex ternaryUnreadableUse if-else or extract function

Final Cheat Sheet
JavaScript// Always prefer these patterns
if (!condition) return;                    // Guard clause
const result = condition ? a : b;          // Ternary
const value = obj?.prop ?? "default";      // Safe + default
isValid && doSideEffect();                 // Short-circuit
const fallback = value ?? defaultValue;     // Nullish (not OR!)