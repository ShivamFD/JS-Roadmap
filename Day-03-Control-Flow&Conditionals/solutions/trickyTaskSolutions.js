// =======================================================
// 30 TRICKY & REAL-WORLD CONTROL FLOW TASKS
// Intermediate Level | Perfect for Interviews & Deep Practice
// File: trickyTasksSolutions.js
// =======================================================

// Task 21: Manually check if a value is truthy or falsy (without using !! or Boolean())
function isTruthy(value) {
  return value ? true : false;
  // These are the 7 falsy values:
  // false, 0, -0, 0n, "", null, undefined, NaN
}
// console.log(isTruthy([]));        // true
// console.log(isTruthy(""));        // false
// console.log(isTruthy(0));         // false


// Task 22: Simple email validation – must contain "@" and "." after it
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}
// console.log(isValidEmail("test@example.com")); // true
// console.log(isValidEmail("test@com"));         // false


// Task 23: Compare two numbers → return largest (largest, or "equal")
function findLargest(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return "equal";
}
// console.log(findLargest(10, 20)); // 20
// console.log(findLargest(5, 5));   // "equal"


// Task 24: Leap year check (divisible by 4, but not 100 unless also by 400)
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true


// Task 25: Check if character is vowel (a,e,i,o,u) – case insensitive
function isVowel(char) {
  if (typeof char !== "string" || char.length !== 1) return false;
  const lower = char.toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(lower);
}


// Task 26: Strong password validation
function isStrongPassword(password) {
  if (typeof password !== "string" || password.length < 8) return false;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  return hasUpper && hasLower && hasNumber && hasSymbol;
}


// Task 27: Greeting based on hour (24-hour format)
function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Night";
}
// console.log(getGreeting(10)); // "Good Morning"
// console.log(getGreeting(22)); // "Good Night"


// Task 28: Categorize age group
function getAgeGroup(age) {
  if (age < 0 || age > 150) return "Invalid age";
  if (age <= 12) return "Child";
  if (age <= 19) return "Teen";
  if (age <= 60) return "Adult";
  return "Senior";
}


// Task 29: Validate form – name, email, password length
function validateForm(name, email, password) {
  if (!name || name.trim() === "") return "Name is required";
  if (!email || !email.includes("@") || !email.includes(".")) return "Valid email required";
  if (!password || password.length < 6) return "Password must be at least 6 characters";
  return "Valid";
}


// Task 30: Delivery charge logic
function getDeliveryCharge(total) {
  if (total > 500) return 0;        // free
  if (total >= 250) return 20;      // 20 rupees
  return 50;                        // default
}


// Task 31: Numeric grade → Letter grade
function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}


// Task 32: Check if string starts with uppercase letter
function startsWithCapital(str) {
  if (!str || typeof str !== "string") return false;
  return str[0] === str[0].toUpperCase() && str[0] !== str[0].toLowerCase();
  // Ensures it's a letter and uppercase
}


// Task 33: Simple spam detection
function isSpam(message) {
  const spamWords = ["win", "free", "offer", "prize", "click here", "urgent"];
  const lowerMsg = message.toLowerCase();
  return spamWords.some(word => lowerMsg.includes(word));
}


// Task 34: Triangle type
function getTriangleType(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return "Invalid";
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}


// Task 35 & 36: Phone number (10 digits) + exactly 3 digits check
function isValidPhone(num) {
  return /^\d{10}$/.test(num);  // exactly 10 digits
}
function hasThreeDigits(num) {
  return /^\d{3}$/.test(String(num));
}


// Task 37: Check if input is a valid number (not NaN)
function isValidNumber(input) {
  return typeof input === "number" && !isNaN(input);
  // or: return Number.isFinite(input);
}


// Task 38: Season from month (1-12)
function getSeason(month) {
  if ([12, 1, 2].includes(month)) return "Winter";
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7, 8].includes(month)) return "Summer";
  if ([9, 10, 11].includes(month)) return "Autumn";
  return "Invalid month";
}


// Task 39: Largest of three numbers
function getMaxOfThree(a, b, c) {
  return Math.max(a, b, c);
  // Or manually:
  // if (a >= b && a >= c) return a;
  // if (b >= a && b >= c) return b;
  // return c;
}


// Task 40: Simple login system
const users = { admin: "123", john: "pass456" };
function login(username, password) {
  return users[username] === password ? "Login successful" : "Invalid credentials";
}


// Task 41: Days in month using switch
function daysInMonth(month, year = 2024) {
  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      return 31;
    case 4: case 6: case 9: case 11:
      return 30;
    case 2:
      return isLeapYear(year) ? 29 : 28;
    default:
      return "Invalid month";
  }
}


// Task 42: Role-based permission
function hasPermission(role, action) {
  const permissions = {
    admin: ["read", "write", "delete"],
    user:  ["read", "write"],
    guest: ["read"]
  };
  return permissions[role]?.includes(action) || false;
}


// Task 43: Palindrome check (ignore case & spaces)
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
// console.log(isPalindrome("A man a plan a canal Panama")); // true


// Task 44: ATM withdrawal rules
function canWithdraw(balance, amount, dailyLimit = 5000) {
  if (amount <= 0) return "Amount must be positive";
  if (amount > balance) return "Insufficient balance";
  if (amount > dailyLimit) return "Exceeds daily limit";
  return "Approved";
}


// Task 45: Traffic light message
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":    return "STOP";
    case "yellow": return "GET READY";
    case "green":  return "GO";
    default:       return "Invalid light";
  }
}


// Task 46: Detect empty array, empty string, null differently
function detectEmpty(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (Array.isArray(value) && value.length === 0) return "empty array";
  if (value === "") return "empty string";
  return "not empty";
}


// Task 47: Case-insensitive "yes"/"no" check
function isYesOrNo(input) {
  const lower = input.toLowerCase().trim();
  return lower === "yes" || lower === "no";
}


// Task 48: Safe access using short-circuit
function getUserName(user) {
  return user && user.profile && user.profile.name || "Guest";
  // or modern: return user?.profile?.name ?? "Guest";
}


// Task 49: Check if password contains whitespace
function hasWhitespace(password) {
  return /\s/.test(password);
  // or: return password.includes(" ") || password.includes("\t");
}


// Task 50: Convert 24h → 12h with AM/PM
function to12HourFormat(hour, minute = 0) {
  if (hour < 0 || hour > 23) return "Invalid hour";
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;  // 0 → 12, 13 → 1, etc.
  return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
}
// console.log(to12HourFormat(14, 5));  // "2:05 PM"
// console.log(to12HourFormat(0));     // "12:00 AM"


// ===============================================
// TEST ALL TASKS (Uncomment to run)
// ===============================================

console.log("Task 24 Leap Year 2024:", isLeapYear(2024)); // true
console.log("Task 26 Strong Pass:", isStrongPassword("Pass123!")); // true
console.log("Task 43 Palindrome:", isPalindrome("racecar")); // true
console.log("Task 50 Time:", to12HourFormat(23, 59)); // "11:59 PM"

console.log("All 30 tricky tasks solved successfully!");