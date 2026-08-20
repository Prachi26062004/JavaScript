"use strict";
           /* JavaScript Comparisons */

// Basic Comparison Operator

console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// Comparing null

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

/*
Why?

Equality (==) and comparison operators (>, <, >=, <=)
treat `null` differently.

For comparisons, JavaScript converts `null` to 0.
*/
// Comparing undefined

console.log(undefined == 0);  // false
console.log(undefined < 0);   // false
console.log(undefined > 0);   // false
console.log(undefined >= 0);  // false

/*
`undefined` does not convert to 0 in these comparisons.
Most comparisons with undefined return false.
*/

// == vs ===

// ==  → Loose equality (checks value after type conversion)
console.log("2" == 2);   // true

// === → Strict equality (checks value AND data type)
console.log("2" === 2);  // false

/*
Use === in modern JavaScript because it avoids
unexpected type coercion.
*/