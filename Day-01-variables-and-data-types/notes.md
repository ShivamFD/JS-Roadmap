# Day 1 — Variables & Data Types

## 1. What is a Variable?
A variable is a container used to store data in JavaScript.

## 2. Types of Variables

3 types of declaration of variables in js :

### 1) var  
- Function scoped  
- Re-declarable  
- Avoid using in modern JS  

### 2) let  
- Block scoped  
- Re-assignable  
- Most commonly used  

### 3) const  
- Block scoped  
- Cannot be reassigned  
- Perfect for values that never change  

---

## 3. Data Types in JS

### **Primitive Data Types:**
1. Number  
2. String  
3. Boolean  
4. Undefined  
5. Null  
6. BigInt  
7. Symbol  

### **Non-Primitive:**
- Object (Arrays, Functions, Objects)

---

## 4. typeof Operator

Example:
```js
typeof 10         // number
typeof "hello"    // string
typeof true       // boolean
typeof undefined  // undefined
typeof null       // object (JavaScript bug)
typeof {}         // object
typeof []         // object
typeof function(){} // function


5. Naming Rules

Cannot start with number

No special characters except _ and $

Use camelCase

Should be meaningful

6. Examples
let age = 20;
const gravity = 9.8;
let name = "Shivam";
