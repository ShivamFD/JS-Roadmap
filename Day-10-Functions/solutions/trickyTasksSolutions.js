// 1. Factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2. Reverse string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 3. Custom map
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// 4. Custom filter
function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 5. Custom reduce
function customReduce(arr, callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

// 6. Find max in array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// 7. Find min in array
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// 8. Count vowels
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// 9. Check palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

// 10. Fibonacci series
function fibonacci(n) {
    if (n <= 1) return [0];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

// 11. Prime numbers in range
function getPrimes(start, end) {
    let primes = [];
    for (let num = start; num <= end; num++) {
        if (num < 2) continue;
        let isPrime = true;
        for (let i = 2; i <= num/2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

// 12. Count words
function countWords(sentence) {
    return sentence.trim().split(/\s+/).length;
}

// 13. Capitalize words
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// 14. Title case
function toTitleCase(sentence) {
    const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'in'];
    return sentence.toLowerCase().split(' ')
        .map((word, i) => (i === 0 || !smallWords.includes(word)) ? 
            word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(' ');
}

// 15. Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 16. Flatten array
function flattenArray(arr) {
    let flat = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flat = flat.concat(flattenArray(item));
        } else {
            flat.push(item);
        }
    }
    return flat;
}

// 17. Power function
function power(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// 18. Merge arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 19. Average of array
function average(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

// 20. Armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

// 21. Multiplication table
function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${n} × ${i} = ${n * i}`);
    }
    return table;
}

// 22. Get object values
function getObjectValues(obj) {
    return Object.values(obj);
}

// 23. Get object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 24. Check sorted array
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) return false;
    }
    return true;
}

// 25. Rotate array
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// 26. Number to binary
function toBinary(num) {
    return num.toString(2);
}

// 27. Character frequency
function charFrequency(str) {
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

// 28. Remove spaces
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

// 29. Unique characters
function uniqueChars(str) {
    return [...new Set(str)].join('');
}

// 30. Reverse words
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// 31. Array intersection
function arrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// 32. Array union
function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// 33. Generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// 34. Count uppercase
function countUppercase(str) {
    let count = 0;
    for (let char of str) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            count++;
        }
    }
    return count;
}

// 35. Count lowercase
function countLowercase(str) {
    let count = 0;
    for (let char of str) {
        if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            count++;
        }
    }
    return count;
}

// 36. Perfect number
function isPerfectNumber(num) {
    if (num < 1) return false;
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

// 37. Second largest
function secondLargest(arr) {
    let max = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num < max) {
            second = num;
        }
    }
    return second;
}

// 38. Manual sort (Bubble sort)
function bubbleSort(arr) {
    let sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
}

// 39. Pattern generator
function generatePattern(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    return pattern;
}

// 40. Missing number
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Test all functions
console.log("=== Testing Functions ===");

// Test a few functions
console.log("Factorial of 5:", factorial(5));
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
console.log("Fibonacci first 8:", fibonacci(8));
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));
console.log("Max in [3, 7, 2, 9]:", findMax([3, 7, 2, 9]));
console.log("Remove duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("Generated OTP:", generateOTP());
console.log("Character frequency of 'hello':", charFrequency("hello"));
console.log("Missing number in 1-10:", findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10], 10));

module.exports = {
    factorial,
    reverseString,
    customMap,
    customFilter,
    customReduce,
    findMax,
    findMin,
    countVowels,
    isPalindrome,
    fibonacci,
    getPrimes,
    countWords,
    capitalizeWords,
    toTitleCase,
    removeDuplicates,
    flattenArray,
    power,
    mergeArrays,
    average,
    isArmstrong,
    multiplicationTable,
    getObjectValues,
    getObjectKeys,
    isSorted,
    rotateArray,
    toBinary,
    charFrequency,
    removeSpaces,
    uniqueChars,
    reverseWords,
    arrayIntersection,
    arrayUnion,
    generateOTP,
    countUppercase,
    countLowercase,
    isPerfectNumber,
    secondLargest,
    bubbleSort,
    generatePattern,
    findMissingNumber
};