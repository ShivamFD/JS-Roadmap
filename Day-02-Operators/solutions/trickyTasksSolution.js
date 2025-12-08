// task01_loginEligibility.js
let age = 20, hasId = true;
console.log(age >= 18 && hasId ? "Login Allowed" : "Access Denied");

// task02_passwordValidation.js
let pass = "abc12345";
console.log(pass.length > 8 && /\d/.test(pass));

// task03_swapNumbers.js
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// task04_gradingSystem.js
let m = 85;
let grade = m >= 90 ? "A" : m >= 75 ? "B" : "C";
console.log(grade);

// task05_simpleInterest.js
let p = 1000, r = 10, t = 2;
console.log((p * r * t) / 100);

// task06_areaOfCircle.js
let r = 5;
console.log(3.1416 * r * r);

// task07_compoundInterest.js
let P = 1000, R = 10, T = 2;
let amount = P * (1 + R/100) ** T;
console.log(amount - P);

// task08_incrementPuzzle.js
let x = 5;
console.log(x++ + ++x); // 5 + 7 = 12

// task09_typeConversion.js
console.log(+true); // 1
console.log(+false); // 0

// task10_stringBuilding.js
let msg = "Hello";
msg += " World";
msg += " from JavaScript";
console.log(msg);

// task11_bitwiseAND.js
console.log(5 & 1); // 1

// task12_bitwiseOR.js
console.log(4 | 1); // 5

// task13_bitwiseNOT.js
console.log(~5);

// task14_checkLeapYear.js
let y = 2024;
console.log((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0);

// task15_maxOfThree.js
let a = 20, b = 10, c = 30;
console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));

// task16_minOfThree.js
let a = 20, b = 10, c = 30;
console.log(a < b ? (a < c ? a : c) : (b < c ? b : c));

task17_speedCheck.js
let speed = 80;
console.log(speed > 60 ? "Over Speed" : "Safe");

task18_discountCalculator.js
let price = 1200;
let discount = price > 1000 ? price * 0.1 : 0;
console.log(price - discount);

// task19_salaryIncrement.js
let salary = 10000;
salary += salary * 0.10;
console.log(salary);

// task20_predictOutput01.js
let x = 3;
console.log(x++ + x++); // 3 + 4 = 7

task21_predictOutput02.js
let x = 3;
console.log(++x + ++x); // 4 + 5 = 9

task22_compareArrays.js
console.log([1,2] == [1,2]); // false
console.log([1,2] === [1,2]); // false

task23_compareObjects.js
console.log({a:1} == {a:1}); // false
console.log({a:1} === {a:1}); // false

task24_temperatureCheck.js
let c = 37;
console.log((c * 9/5) + 32);

task25_typeCheck.js
let x = null;
console.log(x === null ? "null" : typeof x);

task26_evenOddTernary.js
let x = 11;
console.log(x % 2 ? "Odd" : "Even");

task27_nestedLogical.js
let age = 22, hasLicense = true, isDrunk = false;
console.log(age > 18 && hasLicense && !isDrunk);

task28_shoppingCart.js
let total = 0;
total += 200;
total += 150;
total += 400;
console.log(total);

task29_sumOfDigits.js
let n = 456;
let sum = 0;

while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);

task30_lastDigit.js
console.log(456 % 10);

task31_firstDigit.js
let n = 456;
while (n >= 10) n = Math.floor(n / 10);
console.log(n);

task32_flipSign.js
let x = 10;
console.log(-x);

task33_bitwiseXOR.js
let a = 5, b = 10;
a ^= b;
b ^= a;
a ^= b;
console.log(a, b);

task34_creditScoreCheck.js
let score = 720;
console.log(score > 700 ? "Eligible" : "Not Eligible");

task35_marksPercentage.js
let total = 480, outOf = 600;
console.log((total / outOf) * 100);

task36_totalBill.js
let base = 1000;
let gst = base * 0.18;
console.log(base + gst);

task37_emiCalculator.js
let P = 100000, R = 10 / (12 * 100), N = 12;
let emi = P * R * (1 + R)**N / ((1 + R)**N - 1);
console.log(emi);

// task38_isAdult.js
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor");

// task39_digitCount.js
let n = 12345;
let count = 0;

while(n > 0){
    n = Math.floor(n / 10);
    count++;
}
console.log(count);

// task40_temperatureCategory.js
let t = 33;
console.log(t > 40 ? "Hot"
      : t > 25 ? "Warm"
      : t > 15 ? "Cool"
      : "Cold");