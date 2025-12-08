1. What Are Operators?

Operators are special symbols used to perform operations on values and variables.
They help you compute values, compare things, assign data, perform logic, and more.

Example:

let sum = 10 + 20; // + is an operator

2. Types of Operators in JavaScript

JavaScript has 8 main categories:

Arithmetic Operators

Assignment Operators

Comparison Operators

Logical Operators

String Operators

Unary Operators

Conditional (Ternary) Operator

Bitwise Operators (Optional for beginners but included here)

Let’s learn each deeply.

--------------------------------------
## 2.1 Arithmetic Operators

Used to perform math calculations.

Operator	Name	Example	Output
+	Addition	5 + 2	7
-	Subtraction	5 - 2	3
*	Multiplication	5 * 2	10
/	Division	5 / 2	2.5
%	Modulus (Remainder)	5 % 2	1
**	Exponentiation	2 ** 3	8
++	Increment	x++	x+1
--	Decrement	x--	x-1
Postfix vs Prefix
let a = 5;

console.log(a++); // Prints 5 then increments → a becomes 6
console.log(++a); // Increments first → prints 7

## 2.2 Assignment Operators

Assignment = store a value.

Operator	Meaning	Example
=	Assign	x = 10
+=	Add and assign	x += 5
-=	Subtract and assign	x -= 5
*=	Multiply and assign	x *= 5
/=	Divide and assign	x /= 5
%=	Modulus assign	x %= 5
**=	Exponent assign	x **= 3

Example:

let x = 10;
x += 5; // x = x + 5 → 15

## 2.3 Comparison Operators

Used to compare values → returns true/false.

Operator	Meaning	Example
==	Equal	5 == "5" → true
===	Strict Equal	5 === "5" → false
!=	Not equal	10 != 5
!==	Strict not equal	10 !== "10"
>	Greater	5 > 3
<	Less	5 < 3
>=	Greater or equal	5 >= 5
<=	Less or equal	3 <= 4

🛑 Always use ===
Because it compares both value + type.

## 2.4 Logical Operators
Operator	Meaning	Example
&&	AND	true && false → false
||	OR	`true
!	NOT	!true → false

Example:

let age = 20;
console.log(age > 18 && age < 30); // true

## 2.5 String Operators

The + operator can join strings.

let name = "Shivam" + " " + "Verma";


+= also works:

let msg = "Hello";
msg += " World";

## 2.6 Unary Operators
Operator	Meaning
typeof	returns type
delete	removes object property
void	evaluates expression but returns undefined
!	logical NOT
+	converts to number
-	converts to negative

Examples:

console.log(typeof 10); // "number"
console.log(+ "45"); // 45 (string → number)
console.log(- "45"); // -45

## 2.7 Ternary Operator

Short form of if/else.

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";

## 2.8 Bitwise Operators (Optional but Useful)
Operator	Meaning
&	AND
|	OR
^	XOR
~	NOT
<<	Left shift
>>	Right shift

Example:

console.log(5 & 1); // 1

