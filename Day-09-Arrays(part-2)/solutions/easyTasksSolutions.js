// ===============================================
// DAY 9 — ARRAYS PART 2 — 20 EASY TASKS
// map, filter, reduce, every, some
// ===============================================

// Task 1: Use map to double all numbers
const nums1 = [1, 2, 3];
console.log(nums1.map(n => n * 2)); // [2, 4, 6]

// Task 2: Use map to convert strings to uppercase
const strs2 = ["hello", "world"];
console.log(strs2.map(s => s.toUpperCase())); // ["HELLO", "WORLD"]

// Task 3: Use filter to get even numbers
const nums3 = [1, 2, 3, 4];
console.log(nums3.filter(n => n % 2 === 0)); // [2, 4]

// Task 4: Use filter to get strings longer than 5 chars
const strs4 = ["apple", "kiwi", "banana"];
console.log(strs4.filter(s => s.length > 5)); // ["banana"]

// Task 5: Use reduce to sum all numbers
const nums5 = [10, 20, 30];
console.log(nums5.reduce((acc, n) => acc + n, 0)); // 60

// Task 6: Use reduce to find the max number
const nums6 = [5, 10, 3];
console.log(nums6.reduce((max, n) => Math.max(max, n), -Infinity)); // 10

// Task 7: Use every to check if all numbers are positive
const nums7 = [1, 2, 3];
console.log(nums7.every(n => n > 0)); // true

// Task 8: Use every to check if all strings start with "a"
const strs8 = ["apple", "ant"];
console.log(strs8.every(s => s.startsWith("a"))); // true

// Task 9: Use some to check if any number is greater than 10
const nums9 = [5, 8, 12];
console.log(nums9.some(n => n > 10)); // true

// Task 10: Use some to check if any string includes "js"
const strs10 = ["java", "script", "js"];
console.log(strs10.some(s => s.includes("js"))); // true

// Task 11: Chain filter and map to get doubled evens
const nums11 = [1, 2, 3, 4];
console.log(nums11.filter(n => n % 2 === 0).map(n => n * 2)); // [4, 8]

// Task 12: Chain map and reduce to sum squares
const nums12 = [1, 2, 3];
console.log(nums12.map(n => n * n).reduce((acc, sq) => acc + sq, 0)); // 14

// Task 13: Use reduce with initial empty array to clone
const arr13 = [1, 2, 3];
const clone = arr13.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);
console.log(clone); // [1, 2, 3]

// Task 14: Use every on empty array (should be true)
console.log([].every(() => false)); // true

// Task 15: Use some on empty array (should be false)
console.log([].some(() => true)); // false

// Task 16: Use map on array of objects to extract names
const users16 = [{name: "Alice"}, {name: "Bob"}];
console.log(users16.map(u => u.name)); // ["Alice", "Bob"]

// Task 17: Use filter on objects to get active users
const users17 = [{active: true}, {active: false}];
console.log(users17.filter(u => u.active)); // [{active: true}]

// Task 18: Use reduce to count occurrences (basic)
const items18 = ["a", "b", "a"];
const count18 = items18.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count18); // {a: 2, b: 1}

// Task 19: Chain filter, map, reduce for total of evens
const nums19 = [1, 2, 3, 4];
const totalEvens = nums19.filter(n => n % 2 === 0).map(n => n * 10).reduce((acc, n) => acc + n, 0);
console.log(totalEvens); // 60 (20 + 40)

// Task 20: Use every to validate all items are numbers
const arr20 = [1, 2, 3];
console.log(arr20.every(item => typeof item === "number")); // true