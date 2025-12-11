// =======================================================
// DAY 6 — STRINGS PART 2 — 40 TRICKY & REAL-WORLD TASKS
// Advanced Solutions with Regex & Methods
// =======================================================

// Task 11: Count total vowels using regex
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("Education")); // 5

// Task 12: Get all uppercase letters using match()
function getUppercase(str) {
  return str.match(/[A-Z]/g) || [];
}
console.log(getUppercase("Hello WORLD")); // ["H", "W", "O", "R", "L", "D"]

// Task 13: Extract numbers from mixed string
function extractNumbers(str) {
  return str.match(/\d+/g) || [];
}
console.log(extractNumbers("abc123xyz456")); // ["123", "456"]

// Task 14: Extract only letters from mixed string
function extractLetters(str) {
  return str.match(/[a-zA-Z]+/g) || [];
}
console.log(extractLetters("hello123world!")); // ["hello", "world"]

// Task 15: Validate phone number (10 digits)
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}
console.log(isValidPhone("9876543210")); // true
console.log(isValidPhone("123"));       // false

// Task 16: Validate strong password using regex
function isStrongPassword(pass) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);
}
console.log(isStrongPassword("Pass@123")); // true

// Task 17: Remove extra spaces from a sentence
function cleanSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}
console.log(cleanSpaces("  Hello   world  JS   ")); // "Hello world JS"

// Task 18: Replace multiple spaces with single space
console.log("too   much   space".replace(/\s+/g, " ")); // "too much space"

// Task 19: Remove all special characters
function removeSpecial(str) {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}
console.log(removeSpecial("hello@#$world!")); // "helloworld"

// Task 20: Mask phone number except last 4 digits
function maskPhone(phone) {
  return phone.replace(/\d(?=\d{4})/g, "*");
}
console.log(maskPhone("9876543210")); // "******3210"

// Task 21: Mask email address
function maskEmail(email) {
  return email.replace(/(?<=.{2}).(?=.*@)/g, "*");
}
console.log(maskEmail("shivam@gmail.com")); // "sh***m@gmail.com"

// Task 22: Convert snake_case → camelCase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}
console.log(snakeToCamel("hello_world_js")); // "helloWorldJs"

// Task 23: Convert camelCase → snake_case
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
}
console.log(camelToSnake("helloWorldJs")); // "hello_world_js"

// Task 24: Extract domain from email
function getEmailDomain(email) {
  return email.split("@")[1];
}
console.log(getEmailDomain("user@github.com")); // "github.com"

// Task 25: Extract domain name from URL
function getDomainFromUrl(url) {
  return url.match(/https?:\/\/([^\/]+)/)?.[1] || "";
}
console.log(getDomainFromUrl("https://github.com")); // "github.com"

// Task 26: Find most repeated character
function mostRepeatedChar(str) {
  const freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
}
console.log(mostRepeatedChar("aabbccc")); // "c"

// Task 27: Count frequency of digits
function digitFrequency(str) {
  const freq = {};
  str.match(/\d/g)?.forEach(d => freq[d] = (freq[d] || 0) + 1);
  return freq;
}
console.log(digitFrequency("112233")); // {1:2, 2:2, 3:2}

// Task 28: Check palindrome using methods only
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("A man a plan a canal Panama")); // true

// Task 29: Reverse each word in a sentence
function reverseWords(str) {
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("hello world")); // "olleh dlrow"

// Task 30: Sort characters alphabetically
function sortChars(str) {
  return str.split("").sort().join("");
}
console.log(sortChars("javascript")); // "aacijprstv"

// Task 31: Format number as 5-digit ID using padStart()
function formatID(id) {
  return id.toString().padStart(5, "0");
}
console.log(formatID(42)); // "00042"

// Task 32: Repeat string n times using repeat()
console.log("JS ".repeat(5)); // "JS JS JS JS JS "

// Task 33: Replace digits with "#"
console.log("abc123xyz".replace(/\d/g, "#")); // "abc###xyz"

// Task 34: Find first non-repeating character
function firstNonRepeating(str) {
  const freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  for (let char of str) if (freq[char] === 1) return char;
  return null;
}
console.log(firstNonRepeating("aabbc")); // "c"

// Task 35: Compress string (aaabb → a3b2)
function compress(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return result;
}
console.log(compress("aaabbcca")); // "a3b2c2a"

// Task 36: Decompress string (a3b2 → aaabb)
function decompress(str) {
  let result = "";
  let i = 0;
  while (i < str.length) {
    let char = str[i];
    let num = "";
    i++;
    while (i < str.length && !isNaN(str[i])) {
      num += str[i];
      i++;
    }
    result += char.repeat(num ? +num : 1);
  }
  return result;
}
console.log(decompress("a3b2c")); // "aaabbc"

// Task 37: Extract hashtags from text
function extractHashtags(text) {
  return text.match(/#\w+/g) || [];
}
console.log(extractHashtags("I love #coding and #javascript")); // ["#coding", "#javascript"]

// Task 38: Extract mentions (@user) from text
function extractMentions(text) {
  return text.match(/@\w+/g) || [];
}
console.log(extractMentions("Hey @shivam @john")); // ["@shivam", "@john"]

// Task 39: Remove duplicate words
function removeDuplicateWords(sentence) {
  return [...new Set(sentence.toLowerCase().split(" "))].join(" ");
}
console.log(removeDuplicateWords("hello hello world world")); // "hello world"

// Task 40: Find words with only vowels
function vowelWords(str) {
  return str.match(/\b[aeiou]+\b/gi) || [];
}
console.log(vowelWords("I am a euou")); // ["I", "a", "euou"]

// Task 41: Remove HTML tags using regex
function stripHTML(html) {
  return html.replace(/<[^>]*>/g, "");
}
console.log(stripHTML("<p>Hello <b>World</b></p>")); // "Hello World"

// Task 42: Check if string contains only letters
function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}
console.log(onlyLetters("Hello")); // true
console.log(onlyLetters("Hello123")); // false

// Task 43: Find longest word using regex
function longestWord(str) {
  const words = str.match(/\w+/g) || [];
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(longestWord("Find the longest word here")); // "longest"

// Task 44: Count sentences in a paragraph
function countSentences(text) {
  return (text.match(/[.!?]+/g) || []).length;
}
console.log(countSentences("Hi. How are you? I'm good!")); // 3

// Task 45: Check if password contains spaces
function hasSpaces(pass) {
  return /\s/.test(pass);
}
console.log(hasSpaces("my pass")); // true

// Task 46: Convert "12-10-2025" → "2025/10/12" using regex
function reformatDate(date) {
  return date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1");
}
console.log(reformatDate("12-10-2025")); // "2025/10/12"

// Task 47: Extract file extension
function getExtension(filename) {
  return filename.split(".").pop();
}
console.log(getExtension("script.js")); // "js"

// Task 48: Validate URL
function isValidUrl(url) {
  return /^https?:\/\/[\w.-]+\.\w+/i.test(url);
}
console.log(isValidUrl("https://github.com")); // true

// Task 49: Remove brackets/parentheses from string
function removeBrackets(str) {
  return str.replace(/[()\[\]{}<>]/g, "");
}
console.log(removeBrackets("Hello (world) [JS]")); // "Hello world JS"

// Task 50: Find all repeated words
function findRepeatedWords(sentence) {
  const words = sentence.toLowerCase().match(/\w+/g) || [];
  const freq = {};
  words.forEach(w => freq[w] = (freq[w] || 0) + 1);
  return Object.keys(freq).filter(w => freq[w] > 1);
}
console.log(findRepeatedWords("hello hello world world js")); 
// ["hello", "world"]

// =======================================================
// All 50 Tasks Completed! You're a String + Regex Master!
// =======================================================