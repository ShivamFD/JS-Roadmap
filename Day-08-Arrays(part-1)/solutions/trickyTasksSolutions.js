// =======================================================
// DAY 8 — ARRAYS PART 1 — 40 TRICKY & USEFUL TASKS
// Complete Solutions with Explanations
// =======================================================

// Task 21: Manually reverse an array without reverse()
function manualReverse(arr) {
  const rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log("21:", manualReverse([1, 2, 3])); // [3, 2, 1]

// Task 22: Find duplicates in an array using loops
function findDuplicates(arr) {
  const dups = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !dups.includes(arr[i])) {
        dups.push(arr[i]);
      }
    }
  }
  return dups;
}
console.log("22:", findDuplicates([1, 2, 2, 3, 3, 4])); // [2, 3]

// Task 23: Remove duplicates without Set
function removeDuplicates(arr) {
  const unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}
console.log("23:", removeDuplicates([1, 2, 2, 3, 3])); // [1, 2, 3]

// Task 24: Merge two arrays without concat()
function mergeArrays(a, b) {
  const merged = [];
  for (let item of a) merged.push(item);
  for (let item of b) merged.push(item);
  return merged;
}
console.log("24:", mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

// Task 25: Implement stack using push/pop
const stack = [];
stack.push(10);
stack.push(20);
console.log("25 Stack pop:", stack.pop()); // 20
console.log("25 Stack:", stack); // [10]

// Task 26: Implement queue using push/shift
const queue = [];
queue.push("first");
queue.push("second");
console.log("26 Queue shift:", queue.shift()); // "first"
console.log("26 Queue:", queue); // ["second"]

// Task 27: Search for object by property
const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
function findByProp(arr, prop, value) {
  for (let obj of arr) {
    if (obj[prop] === value) return obj;
  }
  return null;
}
console.log("27:", findByProp(users, "id", 2)); // { id: 2, name: "Bob" }

// Task 28: Find max number without Math.max
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log("28:", findMax([5, 12, 8])); // 12

// Task 29: Sum array without reduce()
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
}
console.log("29:", sumArray([1, 2, 3])); // 6

// Task 30: Average of numbers
function average(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}
console.log("30:", average([10, 20, 30])); // 20

// Task 31: Rotate left by k
function rotateLeft(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
console.log("31:", rotateLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]

// Task 32: Rotate right by k
function rotateRight(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log("32:", rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Task 33: Check sorted ascending
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log("33:", isSorted([1, 2, 3])); // true
console.log("33:", isSorted([3, 1, 2])); // false

// Task 34: Find missing number (1 to n)
function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let num of arr) actualSum += num;
  return expectedSum - actualSum;
}
console.log("34:", findMissing([1, 2, 4, 5], 5)); // 3

// Task 35: Find pair summing to target
function findSumPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
    }
  }
  return null;
}
console.log("35:", findSumPair([2, 4, 3, 5], 7)); // [2, 5]

// Task 36: Flatten nested array
function flattenNested(arr) {
  const flat = [];
  for (let item of arr) {
    if (Array.isArray(item)) flat.push(...flattenNested(item));
    else flat.push(item);
  }
  return flat;
}
console.log("36:", flattenNested([1, [2, [3, 4]]])); // [1, 2, 3, 4]

// Task 37: Count defined elements in sparse array
function countDefined(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) count++;
  }
  return count;
}
const sparse = new Array(10); sparse[5] = "hi";
console.log("37:", countDefined(sparse)); // 1

// Task 38: Create 2D matrix
function createMatrix(rows, cols, fill = 0) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) matrix[i][j] = fill;
  }
  return matrix;
}
console.log("38:", createMatrix(2, 3, 1)); // [[1,1,1],[1,1,1]]

// Task 39: Transpose matrix
function transpose(matrix) {
  const trans = [];
  for (let i = 0; i < matrix[0].length; i++) {
    trans[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      trans[i][j] = matrix[j][i];
    }
  }
  return trans;
}
console.log("39:", transpose([[1,2], [3,4]])); // [[1,3], [2,4]]

// Task 40: Search in 2D matrix
function searchInMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return [i, j];
    }
  }
  return null;
}
console.log("40:", searchInMatrix([[1,2], [3,4]], 3)); // [1, 0]

// Task 41: Binary search (sorted array)
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
console.log("41:", binarySearch([1, 3, 5, 7, 9], 5)); // 2

// Task 42: Bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log("42:", bubbleSort([5, 3, 8, 4])); // [3, 4, 5, 8]

// Task 43: Frequency count
function frequency(arr) {
  const freq = {};
  for (let item of arr) freq[item] = (freq[item] || 0) + 1;
  return freq;
}
console.log("43:", frequency([1, 2, 2, 3])); // {1:1, 2:2, 3:1}

// Task 44: Second largest
function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}
console.log("44:", secondLargest([5, 10, 3, 10])); // 5

// Task 45: Move zeros to end
function moveZeros(arr) {
  let insertPos = 0;
  for (let num of arr) {
    if (num !== 0) arr[insertPos++] = num;
  }
  while (insertPos < arr.length) arr[insertPos++] = 0;
  return arr;
}
console.log("45:", moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// Task 46: Manual unshift
function manualUnshift(arr, ...items) {
  for (let i = arr.length - 1; i >= 0; i--) arr[i + items.length] = arr[i];
  for (let i = 0; i < items.length; i++) arr[i] = items[i];
  return arr.length;
}
const arr46 = [3, 4];
manualUnshift(arr46, 1, 2);
console.log("46:", arr46); // [1, 2, 3, 4]

// Task 47: Manual pop
function manualPop(arr) {
  if (arr.length === 0) return undefined;
  const popped = arr[arr.length - 1];
  arr.length--;
  return popped;
}
const arr47 = [1, 2, 3];
console.log("47:", manualPop(arr47)); // 3
console.log(arr47); // [1, 2]

// Task 48: Interleave arrays
function interleave(a, b) {
  const result = [];
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (i < a.length) result.push(a[i]);
    if (i < b.length) result.push(b[i]);
  }
  return result;
}
console.log("48:", interleave([1, 3], [2, 4, 5])); // [1, 2, 3, 4, 5]

// Task 49: Intersection (common elements)
function intersection(a, b) {
  const result = [];
  for (let item of a) {
    if (b.includes(item) && !result.includes(item)) result.push(item);
  }
  return result;
}
console.log("49:", intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// Task 50: Union (unique combined)
function union(a, b) {
  const result = [];
  for (let item of a) if (!result.includes(item)) result.push(item);
  for (let item of b) if (!result.includes(item)) result.push(item);
  return result;
}
console.log("50:", union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

// Task 51: Check array palindrome
function isArrayPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}
console.log("51:", isArrayPalindrome([1, 2, 2, 1])); // true

// Task 52: Fibonacci array
function fibonacciArray(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
  return fib.slice(0, n);
}
console.log("52:", fibonacciArray(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Task 53: Manual remove item
function removeItem(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      for (let j = i; j < arr.length - 1; j++) arr[j] = arr[j + 1];
      arr.length--;
    } else i++;
  }
  return arr;
}
console.log("53:", removeItem([1, 2, 2, 3], 2)); // [1, 3]

// Task 54: Manual insert at index
function insertAt(arr, index, ...items) {
  for (let i = arr.length - 1; i >= index; i--) arr[i + items.length] = arr[i];
  for (let i = 0; i < items.length; i++) arr[index + i] = items[i];
  return arr;
}
const arr54 = [1, 3];
insertAt(arr54, 1, 2);
console.log("54:", arr54); // [1, 2, 3]

// Task 55: Count even/odd
function countEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let num of arr) num % 2 === 0 ? even++ : odd++;
  return { even, odd };
}
console.log("55:", countEvenOdd([1, 2, 3, 4])); // {even: 2, odd: 2}

// Task 56: Filter positives manually
function filterPositive(arr) {
  const pos = [];
  for (let num of arr) if (num > 0) pos.push(num);
  return pos;
}
console.log("56:", filterPositive([-1, 2, -3, 4])); // [2, 4]

// Task 57: Double array manually
function doubleArray(arr) {
  const doubled = [];
  for (let num of arr) doubled.push(num * 2);
  return doubled;
}
console.log("57:", doubleArray([1, 2, 3])); // [2, 4, 6]

// Task 58: Compact sparse array
function compact(arr) {
  const compact = [];
  for (let item of arr) {
    if (item !== undefined) compact.push(item);
  }
  return compact;
}
const sparseArr = new Array(5); sparseArr[2] = "hi";
console.log("58:", compact(sparseArr)); // ["hi"]

// Task 59: Break on condition
const numbers59 = [1, 2, 3, 4, 5];
for (let num of numbers59) {
  if (num > 3) break;
  console.log("59:", num); // 1 2 3
}

// Task 60: Cartesian product
function cartesianProduct(a, b) {
  const result = [];
  for (let x of a) {
    for (let y of b) result.push([x, y]);
  }
  return result;
}
console.log("60:", cartesianProduct([1, 2], ["a", "b"])); 
// [[1,"a"], [1,"b"], [2,"a"], [2,"b"]]

// =======================================================
// All 40 Tricky Tasks Solved! You're an Array Pro!
// =======================================================