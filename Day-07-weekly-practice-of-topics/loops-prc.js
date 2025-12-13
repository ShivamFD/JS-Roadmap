// ===============================================
// WEEKLY PRACTICE: LOOPS
// 15+ Hard Tasks — Interview-Level
// Run with: node loops-prc.js
// ===============================================

// Task 1: FizzBuzz loop with conditions
for (let i = 1; i <= 15; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
// Explanation: Build string without ternary chain.

// Task 2: Reverse array without reverse()
const arrRev = [1, 2, 3];
const reversedArr = [];
for (let i = arrRev.length - 1; i >= 0; i--) {
  reversedArr.push(arrRev[i]);
}
console.log(reversedArr); // [3, 2, 1]
// Explanation: Manual loop push.

// Task 3: Nested loop for matrix transpose
const matrix = [[1,2], [3,4]];
const transpose = [];
for (let i = 0; i < matrix[0].length; i++) {
  transpose[i] = [];
  for (let j = 0; j < matrix.length; j++) {
    transpose[i][j] = matrix[j][i];
  }
}
console.log(transpose); // [[1,3], [2,4]]
// Explanation: Swap rows/cols.

// Task 4: While loop for binary search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1,3,5,7], 5)); // 2
// Explanation: Logarithmic search.

// Task 5: For...of with break on condition
const numsBreak = [1,2,3,4,5];
for (let num of numsBreak) {
  if (num > 3) break;
  console.log(num); // 1 2 3
}
// Explanation: Early break in for...of.

// Task 6: Infinite loop with break for game simulation
let lives = 3;
while (true) {
  console.log("Game running...");
  lives--;
  if (lives === 0) break;
}
// Explanation: Controlled infinite.

// Task 7: Nested for with continue outer label
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outer;
    console.log(i, j);
  }
}
// Explanation: Labeled continue skips outer.

// Task 8: For...in to filter object own properties
const objOwn = {a:1, b:2};
Object.prototype.extra = 3;
for (let key in objOwn) {
  if (objOwn.hasOwnProperty(key)) console.log(key);
}
// Explanation: Avoid inherited props.

// Task 9: While for Fibonacci up to n
function fib(n) {
  let a = 0, b = 1, result = [];
  while (a <= n) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}
console.log(fib(10)); // [0,1,1,2,3,5,8]
// Explanation: Destructuring in loop.

// Task 10: Loop to find duplicates in array
const dupArr = [1,2,3,2];
const dups = [];
for (let i = 0; i < dupArr.length; i++) {
  for (let j = i + 1; j < dupArr.length; j++) {
    if (dupArr[i] === dupArr[j]) dups.push(dupArr[i]);
  }
}
console.log(dups); // [2]
// Explanation: Nested comparison.

// Task 11: Do...while for user input simulation
let attempt = 0;
do {
  attempt++;
} while (attempt < 3 && false); // Simulate
console.log("Attempts:", attempt);
// Explanation: Guaranteed run.

// Task 12: For loop with step for even numbers
for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0 2 4 6 8
}
// Explanation: Custom increment.

// Task 13: Loop to merge sorted arrays
const arrA = [1,3,5], arrB = [2,4,6];
const merged = [];
let ia = 0, ib = 0;
while (ia < arrA.length && ib < arrB.length) {
  merged.push(arrA[ia] < arrB[ib] ? arrA[ia++] : arrB[ib++]);
}
console.log(merged.concat(arrA.slice(ia)).concat(arrB.slice(ib))); // [1,2,3,4,5,6]
// Explanation: Merge sort step.

// Task 14: For...of with index using entries
for (const [index, val] of [1,2,3].entries()) {
  console.log(index, val);
}
// Explanation: Entries for index in for...of.

// Task 15: Nested while for prime check
function isPrime(n) {
  if (n <= 1) return false;
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) return false;
    i++;
  }
  return true;
}
console.log(isPrime(7)); // true
// Explanation: Optimized sqrt check.

// Task 16: Loop to rotate array
const rotateArr = [1,2,3,4];
const k = 2;
for (let i = 0; i < k; i++) {
  rotateArr.unshift(rotateArr.pop());
}
console.log(rotateArr); // [3,4,1,2]
// Explanation: Shift/pop for rotation.

// Task 17: Do...while for retry logic
let retry = 0;
do {
  retry++;
  // Simulate API call
} while (retry < 3 && Math.random() > 0.5);
console.log("Retries:", retry);
// Explanation: Retry pattern.

// Task 18: For in with array pitfalls
const arrPit = [1,2,3];
Array.prototype.extra = "avoid";
for (let key in arrPit) {
  if (arrPit.hasOwnProperty(key)) console.log(arrPit[key]);
}
// Explanation: Filter inherited.

// Task 19: While for gcd
function gcd(x, y) {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}
console.log(gcd(48, 18)); // 6
// Explanation: Euclidean algorithm.

// Task 20: Nested for for anagram check
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }
  for (let c of count) if (c !== 0) return false;
  return true;
}
console.log(isAnagram("listen", "silent")); // true
// Explanation: Count array for freq.

console.log("All tasks complete!");