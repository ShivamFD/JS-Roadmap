// 1. Hello World
function helloWorld() {
    console.log("Hello World");
}

// 2. Add 2 numbers
function add(a, b) {
    return a + b;
}

// 3. Subtract 2 numbers
function subtract(a, b) {
    return a - b;
}

// 4. Square of a number
function square(num) {
    return num * num;
}

// 5. Check if number is even
function isEven(num) {
    return num % 2 === 0;
}

// 6. Check if number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 7. Sum from 1 to n
function sumToN(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 8. Concatenate 2 strings
function concat(str1, str2) {
    return str1 + str2;
}

// 9. Celsius to Fahrenheit
function celsiusToF(celsius) {
    return (celsius * 9/5) + 32;
}

// 10. String length
function getLength(str) {
    return str.length;
}