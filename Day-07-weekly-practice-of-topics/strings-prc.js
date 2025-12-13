// ===============================================
// WEEKLY PRACTICE: STRINGS (Parts 1 & 2)
// 15+ Hard Tasks — Interview-Level
// Run with: node strings-prc.js
// ===============================================

// Task 1: Reverse string without reverse()
function reverseStr(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) rev += str[i];
  return rev;
}
console.log(reverseStr("hello")); // "olleh"
// Explanation: Manual loop (Part 1 basics).

// Task 2: Palindrome check with clean
function isPal(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === reverseStr(str);
}
console.log(isPal("A man a plan a canal Panama")); // true
// Explanation: Clean + reverse (regex from Part 2).

// Task 3: Count vowels with regex
const countVow = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVow("education")); // 5
// Explanation: Match array length.

// Task 4: Anagram check with sort
function isAnag(s1, s2) {
  return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("");
}
console.log(isAnag("listen", "silent")); // true
// Explanation: Sorted comparison.

// Task 5: Remove duplicates manually
function remDup(str) {
  let unique = "";
  for (let char of str) {
    if (!unique.includes(char)) unique += char;
  }
  return unique;
}
console.log(remDup("programming")); // "progamin"
// Explanation: Build unique string.

// Task 6: Longest substring without repeat
function longestUniqueSub(str) {
  let max = 0, current = "", seen = {};
  for (let char of str) {
    if (seen[char]) current = current.slice(seen[char]);
    current += char;
    seen[char] = current.length;
    max = Math.max(max, current.length);
  }
  return max;
}
console.log(longestUniqueSub("abcabcbb")); // 3
// Explanation: Sliding window (hard).

// Task 7: Email validation regex
const isValidEmail = email => /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
console.log(isValidEmail("test@example.com")); // true
// Explanation: Basic regex pattern.

// Task 8: Mask credit card except last 4
function maskCard(card) {
  return card.replace(/\d(?=\d{4})/g, "*");
}
console.log(maskCard("1234567890123456")); // "************3456"
// Explanation: Lookahead regex.

// Task 9: Capitalize first letter of words
function capitalize(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize("hello world")); // "Hello World"
// Explanation: Word boundary regex.

// Task 10: Extract URLs from text
function extractUrls(text) {
  return text.match(/https?:\/\/\S+/gi) || [];
}
console.log(extractUrls("Visit https://example.com now!")); // ["https://example.com"]
// Explanation: URL pattern.

// Task 11: Compress string (aaabb -> a3b2)
function compressStr(str) {
  let comp = "", count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) count++;
    else {
      comp += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return comp;
}
console.log(compressStr("aaabbcca")); // "a3b2c2a"
// Explanation: Run-length encoding.

// Task 12: Decompress string (a3b2 -> aaabb)
function decompressStr(str) {
  let decomp = "", i = 0;
  while (i < str.length) {
    let char = str[i], num = "";
    i++;
    while (i < str.length && /\d/.test(str[i])) {
      num += str[i++];
    }
    decomp += char.repeat(num || 1);
  }
  return decomp;
}
console.log(decompressStr("a3b2c")); // "aaabbc"
// Explanation: Parse char + num.

// Task 13: Remove HTML tags
const stripHtml = html => html.replace(/<[^>]*>/g, "");
console.log(stripHtml("<p>Hello <b>World</b></p>")); // "Hello World"
// Explanation: Greedy regex for tags.

// Task 14: Validate strong password
const strongPass = pass => /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).{8,}/.test(pass);
console.log(strongPass("Pass123!")); // true
// Explanation: Lookaheads for requirements.

// Task 15: Find all emails in text
function findEmails(text) {
  return text.match(/[\w.-]+@[\w.-]+\.\w+/g) || [];
}
console.log(findEmails("Contact test@example.com or info@site.com")); // ["test@example.com", "info@site.com"]
// Explanation: Global match.

// Task 16: Truncate with ellipsis
function truncateStr(str, len) {
  return str.length > len ? str.slice(0, len - 3) + "..." : str;
}
console.log(truncateStr("Long text here", 10)); // "Long te..."
// Explanation: Slice + conditional.

// Task 17: Swap case
function swapCaseStr(str) {
  return str.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
}
console.log(swapCaseStr("HeLLo")); // "hEllO"
// Explanation: Regex replace callback.

// Task 18: Count words without split
function countWordsMan(str) {
  let count = 0, inWord = false;
  for (let char of str) {
    if (/\w/.test(char)) {
      if (!inWord) count++;
      inWord = true;
    } else inWord = false;
  }
  return count;
}
console.log(countWordsMan("Hello world JS")); // 3
// Explanation: State machine loop.

// Task 19: Roman to integer
function romanToInt(roman) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    total += map[roman[i]] < map[roman[i+1]] ? -map[roman[i]] : map[roman[i]];
  }
  return total;
}
console.log(romanToInt("IX")); // 9
// Explanation: Subtractive notation.

// Task 20: Levenshtein distance (edit distance)
function levDist(s1, s2) {
  const dp = Array(s2.length + 1).fill().map(() => Array(s1.length + 1).fill(0));
  for (let i = 0; i <= s1.length; i++) dp[0][i] = i;
  for (let j = 0; j <= s2.length; j++) dp[j][0] = j;
  for (let j = 1; j <= s2.length; j++) {
    for (let i = 1; i <= s1.length; i++) {
      dp[j][i] = s1[i-1] === s2[j-1] ? dp[j-1][i-1] : Math.min(dp[j-1][i], dp[j][i-1], dp[j-1][i-1]) + 1;
    }
  }
  return dp[s2.length][s1.length];
}
console.log(levDist("kitten", "sitting")); // 3
// Explanation: DP matrix (hard algo).

console.log("All tasks complete!");