"use strict";

/* JavaScript Data Types */

// "use strict" enables strict mode.
// It helps JavaScript catch certain common mistakes.
// Modern JavaScript modules are strict by default.


// Variables
let name = "Prachi";
let age = 23;
let isLoggedIn = false;


// Primitive Data Types

// 1. Number
// Used for both integers and floating-point numbers.
let score = 100;
let price = 99.99;

// JavaScript numbers are represented using 64-bit floating-point values.
// Safe integers range from -(2^53 - 1) to (2^53 - 1).


// 2. BigInt
// Used for integers larger than Number's safe integer limit.
let bigNumber = 12345678901234567890n;


// 3. String
// Used to represent text.
let userName = "Prachi";


// 4. Boolean
// Can only have two values: true or false.
let isLoggedInUser = false;


// 5. Null
// Represents an intentional absence of a value.
let temperature = null;


// 6. Undefined
// A variable that has been declared but has not been assigned a value.
let accountState;


// 7. Symbol
// Used to create unique values.
let id = Symbol("id");



// Non-Primitive Data Type

// 8. Object
// Used to store collections of related data.
let user = {
    name: "Prachi",
    age: 23
};



// typeof Operator

// `typeof` tells us the type of a value.

console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof accountState); // undefined
console.log(typeof user);        // object
console.log(typeof bigNumber);   // bigint
console.log(typeof id);          // symbol

// Special JavaScript behavior:
// typeof null returns "object".
console.log(typeof null);        // object



// Quick Summary

/*
    Primitive Data Types:
        1. Number
        2. BigInt
        3. String
        4. Boolean
        5. Null
        6. Undefined
        7. Symbol

    Non-Primitive:
        8. Object
*/


// JavaScript Memory: Stack vs Heap


/*
    Primitive Data Types  → Stack Memory
    Non-Primitive Types   → Heap Memory

    Primitive values are copied by value.
    Non-primitive values (objects, arrays, functions) are copied by reference.
*/


// Stack Memory (Primitive Types)
let myName = "Prachi";

// A copy of the value is assigned.
let anotherName = myName;

anotherName = "Muskan";

console.log("Original Name :", myName);      // Prachi
console.log("Copied Name   :", anotherName); // Muskan

/*
    myName remains unchanged because primitives are copied by value.
*/


// Heap Memory (Non-Primitive Types)
let userOne = {
    email: "prachi@gmail.com",
};

// Both variables point to the same object in heap memory.
let userTwo = userOne;

// Updating userTwo also updates userOne.
userTwo.email = "muskan@gmail.com";

console.log("User One :", userOne);
console.log("User Two :", userTwo);

/*
    Output:

    User One : { email: 'muskan@gmail.com' }
    User Two : { email: 'muskan@gmail.com' }

    Objects are copied by reference, not by value.
*/


