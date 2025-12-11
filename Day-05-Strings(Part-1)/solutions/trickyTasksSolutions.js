// TRICKY + USEFUL TASKS SOLUTIONS – Day 5 Strings Part 1
// These use loops, conditions, templates + basic methods. Handles edge cases!

// Task 1: Reverse a string manually (loop)
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Example
console.log(reverseString("hello"));  // olleh

// Task 2: Count vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
// Example
console.log(countVowels("hello"));  // 2 (e,o)

// Task 3: Remove spaces manually (loop)
function removeSpaces(str) {
  let noSpaces = "";
  for (let char of str) {
    if (char !== " ") noSpaces += char;
  }
  return noSpaces;
}
// Example
console.log(removeSpaces("Hello World"));  // HelloWorld

// Task 4: Count words in a sentence
function countWords(sentence) {
  return sentence.trim().split(" ").length;
}
// Example
console.log(countWords("Hello world JS"));  // 3

// Task 5: Find longest word in a string
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
// Example
console.log(longestWord("Hello beautiful world"));  // beautiful

// Task 6: Convert a string to Title Case
function toTitleCase(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
// Example
console.log(toTitleCase("hello world"));  // Hello World

// Task 7: Convert a sentence to camelCase
function toCamelCase(sentence) {
  return sentence.split(" ").map((word, i) => i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join("");
}
// Example
console.log(toCamelCase("hello world js"));  // helloWorldJs

// Task 8: Extract username from email
function getUsername(email) {
  return email.split("@")[0];
}
// Example
console.log(getUsername("shivam@gmail.com"));  // shivam

// Task 9: Check if string is a palindrome
function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++; right--;
  }
  return true;
}
// Example
console.log(isPalindrome("radar"));  // true

// Task 10: Count frequency of each character
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
// Example
console.log(charFrequency("hello"));  // { h: 1, e: 1, l: 2, o: 1 }

// Task 11: Replace all spaces with "-" using loop
function spacesToDash(str) {
  let result = "";
  for (let char of str) {
    result += (char === " ") ? "-" : char;
  }
  return result;
}
// Example
console.log(spacesToDash("Hello World JS"));  // Hello-World-JS

// Task 12: Count uppercase & lowercase letters
function countCases(str) {
  let upper = 0, lower = 0;
  for (let char of str) {
    if (/[A-Z]/.test(char)) upper++;
    else if (/[a-z]/.test(char)) lower++;
  }
  return { upper, lower };
}
// Example
console.log(countCases("Hello WORLD"));  // { upper: 6, lower: 5 }

// Task 13: Extract file extension from filename
function getExtension(filename) {
  return filename.slice(filename.lastIndexOf(".") + 1);
}
// Example
console.log(getExtension("document.pdf"));  // pdf

// Task 14: Extract domain name from URL
function getDomain(url) {
  return url.split("://")[1]?.split("/")[0] || "";
}
// Example
console.log(getDomain("https://www.example.com/path"));  // www.example.com

// Task 15: Mask email like s****m@gmail.com
function maskEmail(email) {
  const [user, domain] = email.split("@");
  const masked = user[0] + "*".repeat(user.length - 2) + user[user.length - 1];
  return `${masked}@${domain}`;
}
// Example
console.log(maskEmail("shivam@gmail.com"));  // s****m@gmail.com

// Task 16: Repeat string n times (loop)
function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) result += str;
  return result;
}
// Example
console.log(repeatString("hi", 3));  // hihihi

// Task 17: Remove duplicate characters
function removeDuplicates(str) {
  let unique = "";
  for (let char of str) {
    if (!unique.includes(char)) unique += char;
  }
  return unique;
}
// Example
console.log(removeDuplicates("hello"));  // helo

// Task 18: Find second most frequent character
function secondMostFrequent(str) {
  const freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return sorted[1] ? sorted[1][0] : "None";
}
// Example
console.log(secondMostFrequent("aabbcc"));  // a (or b/c)

// Task 19: Swap case (a → A, A → a)
function swapCase(str) {
  let swapped = "";
  for (let char of str) {
    swapped += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return swapped;
}
// Example
console.log(swapCase("HeLLo"));  // hEllO

// Task 20: Reverse words in a sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
// Example
console.log(reverseWords("Hello world JS"));  // JS world Hello

// Task 21: Extract numbers from a mixed string
function extractNumbers(str) {
  return str.match(/\d+/g)?.join("") || "";
}
// Example
console.log(extractNumbers("abc123def456"));  // 123456

// Task 22: Check if string starts with a vowel
function startsWithVowel(str) {
  return /^[aeiou]/i.test(str);
}
// Example
console.log(startsWithVowel("apple"));  // true

// Task 23: Check if string ends with consonant
function endsWithConsonant(str) {
  return !/[aeiou]$/i.test(str);
}
// Example
console.log(endsWithConsonant("hello"));  // true (o is vowel → false? Wait, h e l l o ends with o=vowel → false)

// Task 24: Insert string at a given position
function insertAt(text, insert, pos) {
  return text.slice(0, pos) + insert + text.slice(pos);
}
// Example
console.log(insertAt("HelloWorld", " ", 5));  // Hello World

// Task 25: Truncate string with "..." if > n chars
function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + "..." : str;
}
// Example
console.log(truncate("Hello World", 5));  // Hello...

// Task 26: Compare two strings without == or ===
function compareStrings(str1, str2) {
  return str1.localeCompare(str2) === 0;
}
// Example
console.log(compareStrings("hello", "hello"));  // true

// Task 27: Remove all vowels from a string
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}
// Example
console.log(removeVowels("hello"));  // hll

// Task 28: Find first repeated character
function firstRepeated(str) {
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return char;
    seen.add(char);
  }
  return "None";
}
// Example
console.log(firstRepeated("hello"));  // l

// Task 29: Find last repeated character
function lastRepeated(str) {
  const seen = new Set();
  let last = "None";
  for (let char of str) {
    if (seen.has(char)) last = char;
    seen.add(char);
  }
  return last;
}
// Example
console.log(lastRepeated("hello"));  // l

// Task 30: Create string pattern using loops
function createPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    pattern += "*".repeat(i) + "\n";
  }
  return pattern;
}
// Example
console.log(createPattern(3));
// *
// **
// ***

// Task 31: Convert snake_case → camelCase
function snakeToCamel(snake) {
  return snake.split("_").map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}
// Example
console.log(snakeToCamel("hello_world_js"));  // helloWorldJs

// Task 32: Convert camelCase → snake_case
function camelToSnake(camel) {
  return camel.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
}
// Example
console.log(camelToSnake("helloWorldJs"));  // hello_world_js

// Task 33: Extract capital words from string
function extractCaps(sentence) {
  return sentence.split(" ").filter(word => word === word.toUpperCase()).join(" ");
}
// Example
console.log(extractCaps("Hello WORLD JS"));  // WORLD JS

// Task 34: Replace digits with #
function maskDigits(str) {
  return str.replace(/\d/g, "#");
}
// Example
console.log(maskDigits("abc123"));  // abc###

// Task 35: Check if a string contains only numbers
function isNumeric(str) {
  return /^\d+$/.test(str);
}
// Example
console.log(isNumeric("123"));  // true

// Task 36: Count special characters
function countSpecials(str) {
  let count = 0;
  for (let char of str) {
    if (!/[a-zA-Z0-9 ]/.test(char)) count++;
  }
  return count;
}
// Example
console.log(countSpecials("hello!@#"));  // 3

// Task 37: Extract middle character of string
function middleChar(str) {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
}
// Example
console.log(middleChar("hello"));  // l

// Task 38: Check anagram strings
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
// Example
console.log(isAnagram("listen", "silent"));  // true

// Task 39: Sort characters of string alphabetically
function sortChars(str) {
  return str.split("").sort().join("");
}
// Example
console.log(sortChars("cba"));  // abc

// Task 40: Remove repeated words in a sentence
function removeRepeatedWords(sentence) {
  const words = sentence.split(" ");
  const unique = new Set();
  return words.filter(word => {
    if (unique.has(word)) return false;
    unique.add(word);
    return true;
  }).join(" ");
}
// Example
console.log(removeRepeatedWords("hello hello world world"));  // hello world