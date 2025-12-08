// ===============================================
// 20 EASY CONTROL FLOW TASKS – FULLY SOLVED
// Beginner Friendly with Detailed Comments
// ===============================================

// Task 1: Check if number is positive
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPositive(5));   // true
// console.log(isPositive(-3));  // false
// console.log(isPositive(0));   // false (0 is not positive)


// Task 2: Check if age is 18 or above
function canVote(age) {
  return age >= 18;
}
// console.log(canVote(20)); // true
// console.log(canVote(17)); // false


// Task 3: Return "Even" or "Odd"
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(evenOrOdd(4));  // "Even"
// console.log(evenOrOdd(7));  // "Odd"


// Task 4: Check if a number is zero
function isZero(num) {
  return num === 0;
}
// console.log(isZero(0));     // true
// console.log(isZero(10));    // false


// Task 5: Check if two numbers are equal using ===
function areEqual(a, b) {
  return a === b;  // strict equality (type + value)
}
// console.log(areEqual(5, 5));      // true
// console.log(areEqual(5, "5"));    // false → different type


// Task 6: Check if password length ≥ 8
function isStrongPassword(password) {
  return password.length >= 8;
}
// console.log(isStrongPassword("mypassword123")); // true
// console.log(isStrongPassword("abc"));           // false


// Task 7: Determine if a string is empty
function isEmpty(str) {
  return str === "";
  // Alternative: return str.length === 0;
}
// console.log(isEmpty(""));      // true
// console.log(isEmpty("hello")); // false


// Task 8: If temperature > 30 → "Hot"
function checkWeather(temp) {
  if (temp > 30) {
    console.log("Hot");
  } else {
    console.log("Not hot");
  }
}
// checkWeather(35); // Hot
// checkWeather(25); // Not hot


// Task 9: If user logged in → “Dashboard”, else → “Login”
function showPage(isLoggedIn) {
  if (isLoggedIn) {
    return "Dashboard";
  } else {
    return "Login";
  }
}
// console.log(showPage(true));  // "Dashboard"
// console.log(showPage(false)); // "Login"


// Task 10: Check if a number is between 10 and 20 (inclusive)
function isInRange(num) {
  return num >= 10 && num <= 20;
}
// console.log(isInRange(15)); // true
// console.log(isInRange(5));  // false


// Task 11: Use ternary → “Adult” or “Minor”
function getStatus(age) {
  return age >= 18 ? "Adult" : "Minor";
}
// console.log(getStatus(25)); // "Adult"
// console.log(getStatus(16)); // "Minor"


// Task 12: Check if a number is divisible by 5
function divisibleBy5(num) {
  return num % 5 === 0;
}
// console.log(divisibleBy5(25)); // true
// console.log(divisibleBy5(17)); // false


// Task 13: Print "Weekend" if day is Sat or Sun
function isWeekend(day) {
  // day is a string like "Monday", "Saturday", etc.
  if (day === "Saturday" || day === "Sunday") {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
// console.log(isWeekend("Saturday")); // "Weekend"
// console.log(isWeekend("Tuesday"));  // "Weekday"


// Task 14: If score >= 90 → Grade A
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "Below B";
  }
}
// console.log(getGrade(95)); // "A"
// console.log(getGrade(85)); // "B"


// Task 15: Use OR (||) to return default username
function getUsername(name) {
  return name || "Guest";  // if name is falsy → use "Guest"
}
// console.log(getUsername("Alice"));     // "Alice"
// console.log(getUsername(""));          // "Guest"
// console.log(getUsername(null));        // "Guest"


// Task 16: Use AND (&&) to check two conditions
function canEnterClub(age, hasID) {
  return age >= 18 && hasID === true;
  // or: return age >= 18 && hasID;
}
// console.log(canEnterClub(20, true));  // true
// console.log(canEnterClub(17, true));  // false


// Task 17: Check if string contains spaces (simple)
function hasSpaces(str) {
  return str.includes(" ");
  // Alternative: return str.indexOf(" ") !== -1;
}
// console.log(hasSpaces("Hello World")); // true
// console.log(hasSpaces("HelloWorld"));  // false


// Task 18: Use switch to map 1→Red, 2→Green, 3→Blue
function numberToColor(num) {
  switch (num) {
    case 1:
      return "Red";
    case 2:
      return "Green";
    case 3:
      return "Blue";
    default:
      return "Unknown";
  }
}
// console.log(numberToColor(1)); // "Red"
// console.log(numberToColor(5)); // "Unknown"


// Task 19: Check if input is null or undefined
function isNullOrUndefined(value) {
  return value === null || value === undefined;
  // Modern way: return value == null;  // covers both!
}
// console.log(isNullOrUndefined(null));       // true
// console.log(isNullOrUndefined(undefined));  // true
// console.log(isNullOrUndefined(""));         // false


// Task 20: Eligible for senior discount if age > 60
function hasSeniorDiscount(age) {
  return age > 60;
  // or >= 60 if including 60-year-olds
}
// console.log(hasSeniorDiscount(65)); // true
// console.log(hasSeniorDiscount(50)); // false


// ===============================================
// BONUS: Test all functions quickly
// ===============================================

console.log("Task 1:", isPositive(10));
console.log("Task 3:", evenOrOdd(7));
console.log("Task 11:", getStatus(15));
console.log("Task 20 EASY TASKS – ALL SOLVED!");