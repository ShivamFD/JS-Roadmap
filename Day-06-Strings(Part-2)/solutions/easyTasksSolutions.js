// ===============================================
// DAY 6 — STRINGS PART 2 — 10 EASY TASKS
// Clean & Professional Solutions
// ===============================================

// Task 1: Convert string to uppercase
const str1 = "hello world";
console.log(str1.toUpperCase()); // "HELLO WORLD"

// Task 2: Remove spaces using trim()
const str2 = "   JavaScript   ";
console.log(str2.trim()); // "JavaScript"

// Task 3: Check if a string starts with "http"
const url1 = "https://example.com";
const url2 = "ftp://site.com";
console.log(url1.startsWith("http")); // true
console.log(url2.startsWith("http")); // false

// Task 4: Check if a string ends with ".jpg"
const file1 = "photo.jpg";
const file2 = "image.png";
console.log(file1.endsWith(".jpg")); // true
console.log(file2.endsWith(".jpg")); // false

// Task 5: Find first occurrence of "a" in a string
const text1 = "banana";
console.log(text1.indexOf("a")); // 1
console.log("hello".indexOf("a")); // -1 (not found)

// Task 6: Replace first space with "_"
const sentence1 = "Hello World JS";
console.log(sentence1.replace(" ", "_")); // "Hello_World JS"

// Task 7: Replace all "a" with "@"
const text2 = "banana";
console.log(text2.replace(/a/g, "@")); // "b@n@n@"

// Task 8: Extract words using split()
const sentence2 = "I love JavaScript";
console.log(sentence2.split(" ")); 
// ["I", "love", "JavaScript"]

// Task 9: Count digits using regex
const mixed = "abc123xyz456";
const digits = mixed.match(/\d/g);
console.log(digits ? digits.length : 0); // 6

// Task 10: Validate if a sentence contains the word "JavaScript"
const sentence3 = "I am learning JavaScript daily";
console.log(sentence3.includes("JavaScript")); // true

// ===============================================
// All 10 Easy Tasks Completed!
// ===============================================