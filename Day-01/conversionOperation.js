"use strict";

/* JavaScript Type Conversion */

// String → Number

let score = "100";
console.log(typeof score); // string

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 100


// Common conversions:

// "33"      => 33
// "33abc"   => NaN
// true      => 1
// false     => 0
// null      => 0
// undefined => NaN



// Number → Boolean

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true


// Common Boolean conversions:
//
// 1         => true
// 0         => false
// "Prachi"  => true
// ""        => false
// null      => false
// undefined => false


// Number → String

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);       // "33"
console.log(typeof stringNumber); // string



/* JavaScript Operations */

// Arithmetic Operators

let value = 3;

let negValue = -value;

console.log(negValue); // -3

console.log(2 + 2); // Addition
console.log(2 - 2); // Subtraction
console.log(2 * 2); // Multiplication
console.log(2 / 2); // Division
console.log(2 % 2); // Remainder



// String Concatenation

let str1 = "Hello";
let str2 = "Prachi";

let str3 = str1 + " " + str2;

console.log(str3); // Hello Prachi


// String + Number

// When + is used with a string, JavaScript performs string concatenation.

console.log("1" + 2);     // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + "2");     // "12"
console.log(1 + 2 + "2"); // "32"


// Assignment Operators

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4


// Increment Operator

let gameCounter = 100;

gameCounter++; // 101
++gameCounter; // 102

console.log(gameCounter); // 102