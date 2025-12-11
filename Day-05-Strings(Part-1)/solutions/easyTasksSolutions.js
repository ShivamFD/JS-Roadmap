// EASY TASKS SOLUTIONS – Day 5 Strings Part 1
// All tasks use basic string concepts: length, access, loops, case, slice, includes, templates.

// Task 1: Create a string and print its length
function printStringLength(str) {
  console.log(`String: "${str}" | Length: ${str.length}`);
}
// Example
printStringLength("Hello");  // Output: String: "Hello" | Length: 5

// Task 2: Access first and last character of a string
function getFirstAndLastChar(str) {
  if (str.length === 0) return "Empty string!";
  return `First: ${str[0]} | Last: ${str[str.length - 1]}`;
}
// Example
console.log(getFirstAndLastChar("JavaScript"));  // First: J | Last: t

// Task 3: Print each character using a loop
function printEachChar(str) {
  console.log(`Characters in "${str}":`);
  for (let char of str) {
    console.log(char);
  }
}
// Example
printEachChar("ABC");  // A \n B \n C

// Task 4: Convert string to uppercase
function toUpper(str) {
  return str.toUpperCase();
}
// Example
console.log(toUpper("hello"));  // HELLO

// Task 5: Convert string to lowercase
function toLower(str) {
  return str.toLowerCase();
}
// Example
console.log(toLower("WORLD"));  // world

// Task 6: Extract first 5 characters using slice
function firstFive(str) {
  return str.slice(0, 5);
}
// Example
console.log(firstFive("JavaScript"));  // JavaS

// Task 7: Extract last 3 characters using slice
function lastThree(str) {
  return str.slice(-3);
}
// Example
console.log(lastThree("JavaScript"));  // ipt

// Task 8: Check if a string contains a word using includes()
function containsWord(str, word) {
  return str.includes(word) ? "Yes" : "No";
}
// Example
console.log(containsWord("Hello World", "World"));  // Yes

// Task 9: Use template literal to print greeting
function greeting(name) {
  return `Hello, ${name}! Welcome to JS.`;
}
// Example
console.log(greeting("Shivam"));  // Hello, Shivam! Welcome to JS.

// Task 10: Create multi-line string using template literals
function multiLine() {
  return `
Line 1: Hello
Line 2: World
Line 3: JS Rocks!
  `;
}
// Example
console.log(multiLine());
// Output:
// Line 1: Hello
// Line 2: World
// Line 3: JS Rocks!