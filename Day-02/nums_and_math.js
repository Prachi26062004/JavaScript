"use strict";

          /* JavaScript Numbers & Math Methods */

// Creating Numbers

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Number Methods

// Convert number to string
console.log(balance.toString());          // "100"
console.log(balance.toString().length);   // 3

// Fixed decimal places
console.log(balance.toFixed(2));          // 100.00

// Precision (total significant digits)
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(4));  // 23.90

// Convert to exponential notation
console.log(otherNumber.toExponential(2)); // 2.39e+1

// Format number according to locale
const hundreds = 1000000;

console.log(hundreds.toLocaleString());         // 1,000,000
console.log(hundreds.toLocaleString("en-IN"));  // 10,00,000

// Value of Number object
console.log(balance.valueOf()); // 100

// Number Properties

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Check if value is integer
console.log(Number.isInteger(100));   // true
console.log(Number.isInteger(23.5));  // false

// Check if value is NaN
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN("Prachi"));  // false

// Convert string to number
console.log(Number.parseInt("123px"));    // 123
console.log(Number.parseFloat("12.56px")); // 12.56

// Math Object

console.log(Math);

// Absolute value
console.log(Math.abs(-10)); // 10

// Round to nearest integer
console.log(Math.round(4.6)); // 5

// Round up
console.log(Math.ceil(4.2)); // 5

// Round down
console.log(Math.floor(4.9)); // 4

// Remove decimal part
console.log(Math.trunc(4.99)); // 4

// Power
console.log(Math.pow(2, 3)); // 8

// Square root
console.log(Math.sqrt(64)); // 8

// Cube root
console.log(Math.cbrt(27)); // 3

// Minimum & Maximum
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

// Random Numbers

// Random number between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random number between any range
const min = 10;
const max = 20;

const randomNumber =
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

/*
Useful Number Methods
---------------------
toString()
toFixed()
toPrecision()
toExponential()
toLocaleString()
valueOf()
Number.isInteger()
Number.isNaN()
Number.parseInt()
Number.parseFloat()

Useful Math Methods
-------------------
Math.abs()
Math.round()
Math.ceil()
Math.floor()
Math.trunc()
Math.pow()
Math.sqrt()
Math.cbrt()
Math.min()
Math.max()
Math.random()
*/