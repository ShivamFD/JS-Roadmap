// ===============================================
// WEEKLY PRACTICE: CONDITIONALS
// 15+ Hard Tasks — Interview-Level
// Run with: node conditionals-prc.js
// ===============================================

// Task 1: FizzBuzz with ternary chain
for (let i = 1; i <= 15; i++) {
  console.log(i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
}
// Explanation: Chained ternaries for compact logic (no if-else).

// Task 2: Guard clauses for multi-validation
function validateUser(user) {
  if (!user) return "No user";
  if (typeof user.age !== "number") return "Invalid age";
  if (user.age < 18) return "Underage";
  return "Valid";
}
console.log(validateUser({age: 20})); // "Valid"
// Explanation: Early returns flatten nested ifs.

// Task 3: Switch with fall-through for weekdays
const day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  default:
    console.log("Weekend");
}
// Explanation: Intentional fall-through for groups.

// Task 4: Conditional object property assignment
const isAdmin = true;
const userObj = {
  name: "Shivam",
  ...(isAdmin && { role: "admin" })
};
console.log(userObj); // {name: "Shivam", role: "admin"}
// Explanation: Spread with short-circuit (dynamic props).

// Task 5: Nested ternary for grade
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"
// Explanation: Chained ternaries (avoid too deep).

// Task 6: Short-circuit for optional function call
const log = true && console.log("Logged");
// Explanation: AND executes if left true.

// Task 7: Nullish for default with valid 0
const count = 0;
const display = count ?? "No count";
console.log(display); // 0
// Explanation: ?? ignores falsy but not nullish.

// Task 8: Optional chaining in conditional
const objChain = { prop: { val: 42 } };
if (objChain?.prop?.val > 40) console.log("Greater");
// Explanation: Safe access in if.

// Task 9: Switch with regex test
const input = "apple";
switch (true) {
  case /^[aeiou]/.test(input):
    console.log("Starts with vowel");
    break;
  default:
    console.log("Consonant");
}
// Explanation: True-based switch for expressions.

// Task 10: Guard for array empty check
function processArr(arr) {
  if (!arr?.length) return "Empty";
  return "Processed";
}
console.log(processArr([])); // "Empty"
// Explanation: Optional chaining + length.

// Task 11: Ternary with function call
const isEvenTern = n => n % 2 === 0 ? "Even" : "Odd";
console.log(isEvenTern(4)); // "Even"
// Explanation: Inline function return.

// Task 12: If with bitwise condition
if (5 & 1) console.log("Odd"); else console.log("Even"); // "Odd"
// Explanation: Bitwise for parity.

// Task 13: Conditional loop break
for (let i = 1; i <= 10; i++) {
  if (i > 5) break;
  console.log(i);
}
// Explanation: Early exit in loop.

// Task 14: Switch for range simulation
const age = 25;
switch (true) {
  case age < 18: console.log("Minor"); break;
  case age < 65: console.log("Adult"); break;
  default: console.log("Senior");
}
// Explanation: True-switch for ranges.

// Task 15: Guard with multiple conditions
function checkNum(n) {
  if (n < 0) return "Negative";
  if (n === 0) return "Zero";
  if (n % 2 === 0) return "Even positive";
  return "Odd positive";
}
console.log(checkNum(7)); // "Odd positive"
// Explanation: Sequential guards.

// Task 16: Ternary in template literal
const status = true ? "Active" : "Inactive";
console.log(`User is ${status}`);
// Explanation: Embedded ternary.

// Task 17: If with type coercion
if ("0" == 0) console.log("Loose equal"); // Runs
// Explanation: == vs === pitfalls.

// Task 18: Conditional assignment
let role;
const isAdminCond = true;
role = isAdminCond ? "Admin" : "User";
console.log(role); // "Admin"
// Explanation: Basic ternary assign.

// Task 19: Switch with default fallback
const color = "red";
switch (color) {
  case "red": console.log("Stop"); break;
  default: console.log("Unknown");
}
// Explanation: Default handling.

// Task 20: Guard for nullish check
function getName(user) {
  if (user?.name == null) return "Guest";
  return user.name;
}
console.log(getName({})); // "Guest"
// Explanation: == null for null/undefined.

console.log("All tasks complete!");