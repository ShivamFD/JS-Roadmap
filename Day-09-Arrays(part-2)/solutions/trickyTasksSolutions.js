// =======================================================
// DAY 9 — ARRAYS PART 2 — 60 TRICKY & USEFUL TASKS
// Advanced map, filter, reduce, every, some
// =======================================================

// Task 21: Use map to create array of object properties (e.g., ages)
const users21 = [{age: 25}, {age: 30}];
console.log(users21.map(u => u.age)); // [25, 30]

// Task 22: Use filter to remove falsy values (compact)
const mixed22 = [0, 1, false, 2, "", 3];
console.log(mixed22.filter(Boolean)); // [1, 2, 3]

// Task 23: Use reduce to create object from array (key-value pairs)
const pairs23 = [["key1", "val1"], ["key2", "val2"]];
const obj23 = pairs23.reduce((acc, [k, v]) => ({...acc, [k]: v}), {});
console.log(obj23); // {key1: "val1", key2: "val2"}

// Task 24: Use reduce to flatten nested arrays
const nested24 = [1, [2, [3]]];
const flat24 = nested24.reduce((acc, item) => acc.concat(Array.isArray(item) ? flat24(item) : item), []);
console.log(flat24); // Wait, recursive call error — fix with function
function flatten(arr) {
  return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
}
console.log("24:", flatten(nested24)); // [1, 2, 3]

// Task 25: Use every to check if array is strictly increasing
function isIncreasing(arr) {
  return arr.every((n, i) => i === 0 || n > arr[i - 1]);
}
console.log(isIncreasing([1, 2, 3])); // true

// Task 26: Use some to find if array has duplicates
function hasDuplicates(arr) {
  return arr.some((item, i) => arr.indexOf(item) !== i);
}
console.log(hasDuplicates([1, 2, 2])); // true

// Task 27: Chain map & filter to transform and select
const nums27 = [1, 2, 3, 4];
console.log(nums27.map(n => n * 10).filter(n => n > 20)); // [30, 40]

// Task 28: Use reduce to group by property
function groupBy(arr, prop) {
  return arr.reduce((acc, item) => {
    const key = item[prop];
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}
const people28 = [{group: "A"}, {group: "B"}, {group: "A"}];
console.log(groupBy(people28, "group")); // {A: [...], B: [...]}

// Task 29: Use reduce to implement map()
function customMap(arr, fn) {
  return arr.reduce((acc, item, i, arr) => {
    acc.push(fn(item, i, arr));
    return acc;
  }, []);
}
console.log(customMap([1, 2], n => n * 2)); // [2, 4]

// Task 30: Use reduce to implement filter()
function customFilter(arr, fn) {
  return arr.reduce((acc, item, i, arr) => {
    if (fn(item, i, arr)) acc.push(item);
    return acc;
  }, []);
}
console.log(customFilter([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]

// Task 31: Use reduce for running total (cumulative sum)
const nums31 = [1, 2, 3];
const cumSum = nums31.reduce((acc, n) => {
  const last = acc.length > 0 ? acc[acc.length - 1] : 0;
  acc.push(last + n);
  return acc;
}, []);
console.log(cumSum); // [1, 3, 6]

// Task 32: Use every with callback using index
const arr32 = [1, 3, 5];
console.log(arr32.every((n, i) => n === 2 * i + 1)); // true (odd positions)

// Task 33: Use some to check palindrome array
function isPalArr(arr) {
  return arr.every((item, i) => item === arr[arr.length - 1 - i]);
}
console.log(isPalArr([1, 2, 1])); // true

// Task 34: Chain to find average of positives
const nums34 = [-1, 2, -3, 4];
const avgPos = nums34.filter(n => n > 0).reduce((acc, n, i, arr) => acc + n / arr.length, 0);
console.log(avgPos); // 3 ((2+4)/2)

// Task 35: Use reduce to reverse array
const arr35 = [1, 2, 3];
const rev35 = arr35.reduce((acc, item) => [item, ...acc], []);
console.log(rev35); // [3, 2, 1]

// Task 36: Use map with index to create ranked list
const items36 = ["gold", "silver", "bronze"];
console.log(items36.map((item, i) => `${i + 1}. ${item}`)); // ["1. gold", "2. silver", "3. bronze"]

// Task 37: Use filter to get unique values
function uniqueFilter(arr) {
  return arr.filter((item, i) => arr.indexOf(item) === i);
}
console.log(uniqueFilter([1, 2, 2, 3])); // [1, 2, 3]

// Task 38: Use reduce to find min and max in one pass
function minMax(arr) {
  return arr.reduce(([min, max], n) => [Math.min(min, n), Math.max(max, n)], [Infinity, -Infinity]);
}
console.log(minMax([5, 1, 9])); // [1, 9]

// Task 39: Use every to validate email array (regex)
const emails39 = ["a@example.com", "b@example.com"];
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emails39.every(email => emailRegex.test(email))); // true

// Task 40: Use some to check if array has NaN
const arr40 = [1, NaN, 3];
console.log(arr40.some(n => Number.isNaN(n))); // true

// Task 41: Use reduce to count words in string array
const strs41 = ["hello world", "js is fun"];
const wordCount = strs41.reduce((acc, s) => acc + s.split(" ").length, 0);
console.log(wordCount); // 5

// Task 42: Chain filter & reduce to sum odds
const nums42 = [1, 2, 3, 4];
console.log(nums42.filter(n => n % 2 !== 0).reduce((acc, n) => acc + n, 0)); // 4 (1+3)

// Task 43: Use map to format dates in array
const dates43 = [new Date("2023-01-01"), new Date("2023-02-01")];
console.log(dates43.map(d => d.toLocaleDateString())); // ["1/1/2023", "2/1/2023"] (locale dependent)

// Task 44: Use filter on nested objects (active >18)
const users44 = [{age: 20, active: true}, {age: 15, active: true}];
console.log(users44.filter(u => u.active && u.age > 18)); // [{age:20, active:true}]

// Task 45: Use reduce to merge array of objects
const objs45 = [{a:1}, {b:2}, {c:3}];
console.log(objs45.reduce((acc, obj) => ({...acc, ...obj}), {})); // {a:1, b:2, c:3}

// Task 46: Use every to check all even with bitwise
const nums46 = [2, 4, 6];
console.log(nums46.every(n => (n & 1) === 0)); // true

// Task 47: Use some for existence without includes
const arr47 = [1, 2, 3];
console.log(arr47.some(n => n === 2)); // true

// Task 48: Implement find() using reduce
function customFind(arr, fn) {
  return arr.reduce((found, item) => found || (fn(item) ? item : undefined), undefined);
}
console.log(customFind([1, 2, 3], n => n > 2)); // 3

// Task 49: Implement findIndex() using reduce
function customFindIndex(arr, fn) {
  return arr.reduce((foundIdx, item, i) => foundIdx >= 0 ? foundIdx : (fn(item) ? i : -1), -1);
}
console.log(customFindIndex([1, 2, 3], n => n > 2)); // 2

// Task 50: Use reduce for cartesian product (two arrays)
function cartesianReduce(a, b) {
  return a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
}
console.log(cartesianReduce([1, 2], ["a", "b"])); // [[1,"a"],[1,"b"],[2,"a"],[2,"b"]]

// Task 51: Chain to normalize array (toLowerCase + trim)
const strs51 = [" Hello ", " World "];
console.log(strs51.map(s => s.trim().toLowerCase())); // ["hello", "world"]

// Task 52: Use map to async promises (but sync here — simulate)
const promises52 = [Promise.resolve(1), Promise.resolve(2)];
Promise.all(promises52.map(p => p)).then(console.log); // [1, 2]
// Explanation: Map over promises for all.

// Task 53: Use reduce to build query string from array
const params53 = [["key1", "val1"], ["key2", "val2"]];
const query53 = params53.reduce((acc, [k, v], i) => acc + (i > 0 ? "&" : "") + `${k}=${v}`, "");
console.log(query53); // "key1=val1&key2=val2"

// Task 54: Use every for type checking all strings
const arr54 = ["a", "b"];
console.log(arr54.every(item => typeof item === "string")); // true

// Task 55: Use some for partial match in strings
const strs55 = ["java", "script"];
console.log(strs55.some(s => s.includes("script"))); // true

// Task 56: Use reduce to create frequency map
const arr56 = [1, 2, 2, 3];
const freq56 = arr56.reduce((acc, n) => {
  acc[n] = (acc[n] || 0) + 1;
  return acc;
}, {});
console.log(freq56); // {1:1, 2:2, 3:1}

// Task 57: Chain filter, map, reduce for pipeline stats
const nums57 = [1, -2, 3];
const stats57 = nums57.filter(n => n > 0).map(n => n * 10).reduce((acc, n) => acc + n, 0);
console.log(stats57); // 40

// Task 58: Use map with array arg (rare use)
const arr58 = [1, 2, 3];
arr58.map((n, i, array) => console.log(array.length)); // 3 3 3

// Task 59: Use reduceRight for right-to-left
const arr59 = [1, 2, 3];
console.log(arr59.reduceRight((acc, n) => acc + n, "")); // "321" (string concat right-left)

// Task 60: Use every/some with objects (deep checks)
const users60 = [{age: 20}, {age: 25}];
console.log(users60.every(u => u.age > 18)); // true
console.log(users60.some(u => u.age > 30)); // false

// Task 61: Implement chunk array using reduce
function chunk(arr, size) {
  return arr.reduce((acc, item, i) => {
    if (i % size === 0) acc.push([]);
    acc[acc.length - 1].push(item);
    return acc;
  }, []);
}
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]

// Task 62: Use map to clone deep (simple objects)
const objs62 = [{a:1}, {b:2}];
const clone62 = objs62.map(obj => ({...obj}));
clone62[0].a = 10;
console.log(objs62[0].a); // 1 (original unchanged)

// Task 63: Use filter with index (alternate items)
const arr63 = [1,2,3,4];
console.log(arr63.filter((_, i) => i % 2 === 0)); // [1,3]

// Task 64: Use reduce to simulate join()
function customJoin(arr, sep) {
  return arr.reduce((acc, item, i) => acc + (i > 0 ? sep : "") + item, "");
}
console.log(customJoin(["a", "b", "c"], "-")); // "a-b-c"

// Task 65: Chain map, filter, every for full test
const nums65 = [2,4,6];
console.log(nums65.map(n => n / 2).filter(n => n > 1).every(n => n % 1 === 0)); // true

// Task 66: Use some for short-circuit search
const largeArr = new Array(1e6).fill(0); largeArr[500000] = 1;
console.log(largeArr.some(n => n === 1)); // true (short-circuits if early)

// Task 67: Use every for validation chain
const validators = [n => n > 0, n => n % 2 === 0];
const num67 = 4;
console.log(validators.every(fn => fn(num67))); // true

// Task 68: Use reduce to simulate join()
function balanceParens(str) {
  return str.split("").reduce((acc, c) => {
    if (c === "(") return acc + 1;
    if (c === ")") return acc > 0 ? acc - 1 : -1;
    return acc;
  }, 0) === 0;
}
console.log(balanceParens("()()")); // true

// Task 69: Implement flat() using reduce
function customFlat(arr, depth = 1) {
  return depth > 0 ? arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? customFlat(item, depth - 1) : item), []) : arr;
}
console.log(customFlat([1, [2, [3]]], Infinity)); // [1,2,3]

// Task 70: Use filter with index condition
const arr70 = ["a", "b", "c", "d"];
console.log(arr70.filter((_, i) => i % 2 === 1)); // ["b", "d"]

// Task 71: Use reduce for longest string
const strs71 = ["short", "longest", "medium"];
console.log(strs71.reduce((long, s) => s.length > long.length ? s : long, "")); // "longest"

// Task 72: Chain for data normalization + aggregation
const data72 = ["  hello ", " world  "];
const normSum = data72.map(s => s.trim()).reduce((acc, s) => acc + s.length, 0);
console.log(normSum); // 10

// Task 73: Use every to check sorted
function isSortedEvery(arr) {
  return arr.every((n, i) => i === 0 || n >= arr[i - 1]);
}
console.log(isSortedEvery([1,2,3])); // true

// Task 74: Use some for error detection
const errors74 = [null, 1, undefined];
console.log(errors74.some(item => item == null)); // true

// Task 75: Use map to create pairs [item, index]
const arr75 = ["a", "b"];
console.log(arr75.map((item, i) => [item, i])); // [["a",0], ["b",1]]

// Task 76: Use reduce for custom sort simulation
// Simulate by reducing to sorted
const unsorted76 = [3,1,2];
const sorted76 = unsorted76.reduce((acc, n) => {
  let inserted = false;
  for (let i = 0; i < acc.length; i++) {
    if (n < acc[i]) {
      acc.splice(i, 0, n);
      inserted = true;
      break;
    }
  }
  if (!inserted) acc.push(n);
  return acc;
}, []);
console.log(sorted76); // [1,2,3]

// Task 77: Implement includes using some
function customIncludes(arr, val) {
  return arr.some(item => item === val);
}
console.log(customIncludes([1,2,3], 2)); // true

// Task 78: Chain map, filter, every for full test
const nums78 = [2,4,6];
console.log(nums78.map(n => n / 2).filter(n => n % 1 === 0).every(n => n > 0)); // true

// Task 79: Use reduce to chunk array
function chunkReduce(arr, size) {
  return arr.reduce((acc, item, i) => {
    const chunkIdx = Math.floor(i / size);
    if (!acc[chunkIdx]) acc[chunkIdx] = [];
    acc[chunkIdx].push(item);
    return acc;
  }, []);
}
console.log(chunkReduce([1,2,3,4,5,6], 2)); // [[1,2],[3,4],[5,6]]

// Task 80: Use every/some with objects (deep checks)
const users80 = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
console.log(users80.every(u => u.age > 20)); // true
console.log(users80.some(u => u.name.startsWith("A"))); // true