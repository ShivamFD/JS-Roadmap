// ===============================================
// DAY 8 — ARRAYS PART 1 — 20 EASY TASKS
// Basics, Push/Pop, Loops, Search
// ===============================================

// Task 1: Create an empty array and print its length
const arr1 = [];
console.log(arr1.length); // 0

// Task 2: Create an array with 3 numbers and access the second element
const arr2 = [10, 20, 30];
console.log(arr2[1]); // 20

// Task 3: Update the first element of an array
const arr3 = [1, 2, 3];
arr3[0] = 100;
console.log(arr3); // [100, 2, 3]

// Task 4: Add an item to the end of an array using push()
const arr4 = ["a", "b"];
arr4.push("c");
console.log(arr4); // ["a", "b", "c"]

// Task 5: Remove the last item from an array using pop()
const arr5 = [1, 2, 3];
const popped = arr5.pop();
console.log(arr5); // [1, 2]
console.log(popped); // 3

// Task 6: Add an item to the start of an array using unshift()
const arr6 = [2, 3];
arr6.unshift(1);
console.log(arr6); // [1, 2, 3]

// Task 7: Remove the first item from an array using shift()
const arr7 = [1, 2, 3];
const shifted = arr7.shift();
console.log(arr7); // [2, 3]
console.log(shifted); // 1

// Task 8: Print all items in an array using a for loop
const arr8 = ["x", "y", "z"];
for (let i = 0; i < arr8.length; i++) {
  console.log(arr8[i]);
}

// Task 9: Print all items using for...of loop
const arr9 = [4, 5, 6];
for (let num of arr9) {
  console.log(num);
}

// Task 10: Check if an array includes a specific number
const arr10 = [10, 20, 30];
console.log(arr10.includes(20)); // true

// Task 11: Find the index of a string in an array
const arr11 = ["apple", "banana", "cherry"];
console.log(arr11.indexOf("banana")); // 1

// Task 12: Find the last index of a repeated item
const arr12 = ["red", "blue", "red"];
console.log(arr12.lastIndexOf("red")); // 2

// Task 13: Create an array from a string using split()
const str13 = "a,b,c";
const arr13 = str13.split(",");
console.log(arr13); // ["a", "b", "c"]

// Task 14: Loop through an array and sum all numbers
const arr14 = [1, 2, 3];
let sum14 = 0;
for (let num of arr14) sum14 += num;
console.log(sum14); // 6

// Task 15: Create a sparse array and print its length
const arr15 = new Array(5);
arr15[2] = "x";
console.log(arr15.length); // 5

// Task 16: Use at() to access the last item
const arr16 = [1, 2, 3];
console.log(arr16.at(-1)); // 3

// Task 17: Truncate an array by setting length
const arr17 = [1, 2, 3, 4];
arr17.length = 2;
console.log(arr17); // [1, 2]

// Task 18: Extend an array by setting length higher
const arr18 = [1, 2];
arr18.length = 4;
console.log(arr18.length); // 4 (with undefined)

// Task 19: Push multiple items at once
const arr19 = [];
arr19.push(1, 2, 3);
console.log(arr19); // [1, 2, 3]

// Task 20: Pop from an empty array and handle undefined
const arr20 = [];
const popped20 = arr20.pop();
console.log(popped20 === undefined ? "Empty" : popped20); // "Empty"