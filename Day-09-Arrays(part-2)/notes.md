DAY 9 — JavaScript Arrays (Part 2: map, filter, reduce, every, some)
Complete A to Z Deep Dive
Building on Part 1 (basics, push/pop/shift/unshift, loops, search), Part 2 focuses on higher-order array methods for transformation, filtering, aggregation, and testing. These are functional programming essentials — used in 80% of modern JS code for clean, declarative operations.
These notes include detailed theory, syntax breakdowns, examples, best practices, common pitfalls, and real-world project examples (e.g., from data apps, e-commerce, games). All code is modern ES6+. These methods return new arrays (immutable style) or values, without mutating originals (except reduce in some cases).
Master these for interviews (e.g., transform data without loops) and efficient code!

1. Overview of Day 9
Theory & Importance
Part 2 introduces higher-order functions (functions taking/returning functions) for arrays. They promote declarative code (what to do, not how) over imperative loops — more readable, less error-prone.

map(): Transform each item → new array.
filter(): Select subset → new array.
reduce(): Aggregate to single value (sum, max, etc.).
every(): Test all true → boolean.
some(): Test any true → boolean.
Chaining: e.g., arr.filter().map().reduce() — powerful!
Performance: O(n) per method — chain wisely.
Why Crucial? Replaces manual loops in React, Node, data processing — functional style is modern JS.

Key Benefits

Immutable: No side effects on original.
Callback-Based: Anonymous/arrow functions common.
Polyfills: Available for old browsers, but use ES6+.

Real-World Impact: In big data, these optimize (e.g., reduce for totals).
Highlight: Callbacks get item, index, array args.

2. map() — Transform Each Element
Theory & Definition
map(callback) applies callback to each item, returns new array of results. Doesn't mutate original.

Callback Args: (item, index, array).
When to Use: Create derived arrays (e.g., double numbers, format objects).
Returns: New array same length.
Edge Cases: Empty array → empty; undefined callbacks error.

Syntax
JavaScriptconst newArr = arr.map((item, index, array) => {
  // Transform item
  return newValue;
});
Basic Example
JavaScriptconst nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);  // [2, 4, 6]
console.log(nums);     // [1, 2, 3] (unchanged)
Advanced Example with Index
JavaScriptconst fruits = ["apple", "banana"];
const indexed = fruits.map((f, i) => `${i + 1}: ${f}`);
console.log(indexed);  // ["1: apple", "2: banana"]
Real-World Project Example
In a Product Catalog (e-commerce app):

Map to formatted prices.

JavaScriptconst products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 }
];
const formatted = products.map(p => `${p.name}: $${p.price.toFixed(2)}`);
console.log(formatted);  // ["Laptop: $1000.00", "Mouse: $50.00"]

Why map()? Generate UI list items dynamically (e.g., React .map() for JSX).

Best Practice: Use arrow functions; return explicitly if {} used.
Pitfall: Forgetting return in {} → [undefined, ...].

3. filter() — Select Subset of Elements
Theory & Definition
filter(callback) returns new array of items where callback true. Doesn't mutate.

Callback Args: (item, index, array) → return boolean.
When to Use: Subset data (e.g., even numbers, active users).
Returns: New array (possibly empty).
Edge Cases: All false → []; empty input → [].

Syntax
JavaScriptconst filtered = arr.filter((item, index, array) => {
  return condition;  // true to keep
});
Basic Example
JavaScriptconst numsF = [1, 2, 3, 4];
const evens = numsF.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]
Advanced Example with Objects
JavaScriptconst usersF = [
  { name: "Alice", active: true },
  { name: "Bob", active: false }
];
const active = usersF.filter(u => u.active);
console.log(active);  // [{name: "Alice", active: true}]
Real-World Project Example
In a Task Manager (like Trello):

Filter completed tasks.

JavaScriptconst tasks = [
  { title: "Code", done: false },
  { title: "Test", done: true }
];
const completed = tasks.filter(t => t.done);
console.log(completed.length);  // 1

Why filter()? Dynamic views (e.g., "show only active").

Best Practice: Chain with map: arr.filter(cond).map(transform).
Pitfall: Returns references — mutate filtered mutates original objects.

4. reduce() — Aggregate to Single Value
Theory & Definition
reduce(callback, initial) applies callback cumulatively, returns single value.

Callback Args: (accumulator, item, index, array) → return new acc.
Initial: Optional (default first item).
When to Use: Sum, max, flatten, group (versatile!).
Returns: Any type (number, object, array).
Edge Cases: Empty without initial → error; one item → that item.

Syntax
JavaScriptconst result = arr.reduce((acc, item, index, array) => {
  // Update acc
  return newAcc;
}, initialValue);
Basic Example (Sum)
JavaScriptconst numsR = [1, 2, 3];
const sum = numsR.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 6
Advanced Example (Object)
JavaScriptconst items = ["a", "b", "a"];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count);  // {a: 2, b: 1}
Real-World Project Example
In a Shopping Cart (total calculator):

Reduce for subtotal.

JavaScriptconst cart = [
  { price: 10, qty: 2 },
  { price: 5, qty: 3 }
];
const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
console.log("Total:", total);  // 35

Why reduce()? Aggregate data (e.g., stats in analytics).

Best Practice: Provide initial (0 for sum, [] for array).
Pitfall: Wrong initial type (e.g., string for sum → concat).

5. every() & some() — Test Conditions
Theory & Definition
Test array against callback — short-circuit for efficiency.

every(callback): True if all true.
some(callback): True if any true.
Callback Args: (item, index, array) → boolean.
When to Use: Validation (all valid? any error?).
Returns: Boolean; empty every=true, some=false.

Syntax
JavaScriptconst all = arr.every((item, index, array) => condition);
const any = arr.some((item, index, array) => condition);
Basic Examples
JavaScriptconst numsE = [2, 4, 6];
console.log(numsE.every(n => n % 2 === 0));  // true (all even)
console.log(numsE.some(n => n > 5));         // true (any >5)
console.log([].every(() => false));          // true (empty)
Advanced Example
JavaScriptconst orders = [
  { paid: true },
  { paid: false }
];
console.log(orders.every(o => o.paid));  // false
console.log(orders.some(o => !o.paid));  // true (any unpaid)
Real-World Project Example
In a Form Validator (multi-field check):

Every for all valid.

JavaScriptconst fields = ["user@example.com", "password123", "25"];
const validators = [
  f => f.includes("@"),  // email
  f => f.length >= 8,    // pass
  f => !isNaN(f)         // age
];
const allValid = fields.every((f, i) => validators[i](f));
console.log("Form valid:", allValid);  // true

Why every/some? Bulk checks (e.g., all items in stock?).

Best Practice: Short-circuit: every stops on first false, some on first true.
Pitfall: Empty arrays — handle separately if needed.

6. Chaining Methods
Theory
Chain for pipelines: filter → map → reduce.

Theory: Each returns array/value for next.
Immutable: Safe for functional style.

Example
JavaScriptconst data = [1, -2, 3, -4];
const result = data
  .filter(n => n > 0)    // [1,3]
  .map(n => n * 10)      // [10,30]
  .reduce((acc, n) => acc + n, 0);  // 40
console.log(result);
Real-World Project Example
In a Analytics Dashboard:

Process sales data.

JavaScriptconst sales = [{ amt: 100, paid: true }, { amt: 50, paid: false }, { amt: 200, paid: true }];
const paidTotal = sales
  .filter(s => s.paid)
  .map(s => s.amt)
  .reduce((acc, amt) => acc + amt, 0);
console.log("Paid total:", paidTotal);  // 300

Why Chaining? Readable data flows (e.g., Redux reducers).

Best Practice: One method per line for readability.
Pitfall: Mutating in callbacks breaks immutability.

7. Common Pitfalls & Best Practices
Pitfalls List

No Return in Callback: map → [undefined,...]; reduce errors.
Mutation in Callbacks: e.g., push in map — side effects.
Empty Arrays: reduce without initial errors; every(true)/some(false).
Non-Array Inputs: Methods on strings/objects — convert first.
Performance: Chaining multiple O(n) = O(n*k) — fine for small, profile large.
Arrow vs Function: Arrow no 'this' — use function if needed.

Best Practices

Functional Style: Avoid for loops — use these for clarity.
Initial in Reduce: Always provide to handle empty.
Type Guards: In callbacks, check types (e.g., if (typeof item === "number")).
Debug: Chain step-by-step; console.log intermediate.
Real-World Tip: In React, map for rendering lists; filter for conditional UI.

Advanced Note
These are prototypes — extend with custom (e.g., Array.prototype.myMap = ...).

Summary Cheat Sheet


Method            Purpose/Returns         Example            Real-World Tip  
map           Transform → new array   .map(n => n*2)        Format data for UI
filter        Select → new array      .filter(n => n>0)     Query subsets (search    results)
reduce        Aggregate → value       .reduce((a,b)=>a+b,0)  Totals/stats in reports
every         All true → bool         .every(n=>n%2===0)    Validate all (form fields)
some          Any true → bool         .some(n=>n>10)        Check existence (errors)
You MASTERED Arrays Part 2! Chain them in projects.
Next → Day 10: Functions    