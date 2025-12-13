// ===============================================
// WEEKLY PRACTICE: OPERATORS
// 15+ Hard Tasks — Interview-Level
// Run with: node operators-prc.js
// ===============================================

// Task 1: Implement exponentiation without **
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) result *= base;
  return result;
}
console.log(power(2, 3)); // 8
// Explanation: Manual multiplication loop (bitwise alternative possible).

// Task 2: Check if number is even without %2
const isEven = n => (n & 1) === 0;
console.log(isEven(4)); // true
// Explanation: Bitwise AND with 1 checks LSB.

// Task 3: Swap two numbers without temp or arithmetic
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5
// Explanation: Destructuring assignment (ES6).

// Task 4: Find max without Math.max or if
const max = (x, y) => x - ((x - y) & ((x - y) >> 31));
console.log(max(10, 20)); // 20
// Explanation: Bitwise sign bit trick (advanced).

// Task 5: Increment number without ++ or +
let num = 5;
num = -~num;
console.log(num); // 6
// Explanation: Bitwise NOT flip (two's complement).

// Task 6: Check if power of 2 without loop
const isPowerOf2 = n => n > 0 && (n & (n - 1)) === 0;
console.log(isPowerOf2(8)); // true
// Explanation: Bitwise clears all but highest bit.

// Task 7: Logical short-circuit for default value with falsy handling
const getValue = val => val ?? "Default";
console.log(getValue(0)); // 0 (handles 0 as valid)
// Explanation: Nullish coalescing vs || (falsy vs nullish).

// Task 8: Bitwise XOR for finding unique number in array
const nums = [1, 2, 3, 2, 1];
const unique = nums.reduce((acc, n) => acc ^ n, 0);
console.log(unique); // 3
// Explanation: XOR cancels duplicates.

// Task 9: Optional chaining with default
const user = { profile: { name: "Shivam" } };
const nameVal = user?.profile?.age ?? "Unknown";
console.log(nameVal); // "Unknown"
// Explanation: Safe access + nullish default.

// Task 10: Implement modulo without %
function mod(dividend, divisor) {
  return dividend - Math.floor(dividend / divisor) * divisor;
}
console.log(mod(10, 3)); // 1
// Explanation: Manual remainder calculation.

// Task 11: Check truthy without if
const valTruthy = "truthy" && "Yes" || "No";
console.log(valTruthy); // "Yes"
// Explanation: Short-circuit AND/OR chain.

// Task 12: Bitwise shift for multiplication by 2
let mul = 5 << 1;
console.log(mul); // 10
// Explanation: Left shift = *2 (binary).

// Task 13: Compound assignment for array push without push
let arrComp = [1, 2];
arrComp[arrComp.length] = 3;
console.log(arrComp); // [1, 2, 3]
// Explanation: Length as index (old-school push).

// Task 14: Logical NOT for boolean coercion
const isTruthy = !!"value";
console.log(isTruthy); // true
// Explanation: Double NOT coerces to bool.

// Task 15: Bitwise OR for floor
const floorVal = 5.9 | 0;
console.log(floorVal); // 5
// Explanation: Truncate decimal (bitwise on int).

// Task 16: Unary + for string to number
const strToNumOp = +"123";
console.log(strToNumOp); // 123
// Explanation: Coercion operator.

// Task 17: Spread for array concat without concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4]
// Explanation: Spread operator (ES6).

// Task 18: Destructuring for variable rename
const objRename = { oldName: "value" };
const { oldName: newName } = objRename;
console.log(newName); // "value"
// Explanation: Alias in destructuring.

// Task 19: Nullish for optional params
function func(param = null) {
  const value = param ?? "Default";
  return value;
}
console.log(func(0)); // 0
// Explanation: Handles 0/false as valid.

// Task 20: Bitwise for absolute value without Math.abs
const absVal = n => (n ^ (n >> 31)) - (n >> 31);
console.log(absVal(-5)); // 5
// Explanation: Two's complement trick.

console.log("All tasks complete!");