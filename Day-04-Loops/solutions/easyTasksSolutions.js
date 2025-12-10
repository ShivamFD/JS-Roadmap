// =============================================
// EASY TASKS SOLUTIONS (1–10)
// JavaScript Loop Practice
// Clean, commented, beginner-friendly
// =============================================

console.log("EASY TASKS SOLUTIONS");
console.log("=====================\n");

// Task 1: Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("---");

// Task 2: Print even numbers from 1 to 20
console.log("2. Even numbers from 1 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("---");

// Task 3: Print odd numbers from 1 to 20
console.log("3. Odd numbers from 1 to 20:");
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}
console.log("---");

// Task 4: Print each character of a string
console.log("4. Characters of 'JavaScript':");
let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
console.log("---");

// Task 5: Print array elements using for loop
console.log("5. Array elements:");
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("---");

// Task 6: Sum of numbers from 1 to 50
console.log("6. Sum from 1 to 50:");
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log("Sum =", sum); // 1275
console.log("---");

// Task 7: Count digits in a number
console.log("7. Count digits in 4583:");
let num = 4583;
let count = 0;
let temp = num;
while (temp > 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log("Digits =", count); // 4
console.log("---");

// Task 8: Print table of 5
console.log("8. Table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}
console.log("---");

// Task 9: Reverse a string using loop
console.log("9. Reverse 'hello':");
let word = "hello";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log("Reversed =", reversed); // olleh
console.log("---");

// Task 10: Print numbers from 10 to 1
console.log("10. Countdown 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("\nAll Easy Tasks Completed!");