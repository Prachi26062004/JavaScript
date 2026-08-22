"use strict";
                     /* JavaScript Strings */

// Strings store text data.
const firstName = "Prachi";
const lastName = "Chouhan";
const gameName = "PrachiGaming";

// 1. Template Literals

console.log(`Hello, my name is ${firstName} ${lastName}.`);

// 2. Length

console.log(gameName.length); // 12

// 3. Access Characters

console.log(gameName[0]);        // P
console.log(gameName.charAt(3)); // c
console.log(gameName.at(-1));    // g (last character)

// 4. Find Character or Word

console.log(gameName.indexOf("G"));      // 6
console.log(gameName.lastIndexOf("a"));  // Last occurrence of 'a'
console.log(gameName.includes("Gaming")); // true
console.log(gameName.startsWith("Pra"));  // true
console.log(gameName.endsWith("ing"));    // true

// 5. Change Case

console.log(gameName.toUpperCase()); // PRACHIGAMING
console.log(gameName.toLowerCase()); // prachigaming

// 6. Extract Parts of a String

console.log(gameName.substring(0, 6)); // Prachi
console.log(gameName.slice(6));        // Gaming
console.log(gameName.slice(-6));       // Gaming

// 7. Remove Spaces

const userName = "   Muskan Chouhan   ";

console.log(userName);
console.log(userName.trim());      // Remove both sides
console.log(userName.trimStart()); // Remove starting spaces
console.log(userName.trimEnd());   // Remove ending spaces

// 8. Replace Text

const url = "https://prachi.com/prachi%20chouhan";

console.log(url.replace("%20", "-"));
console.log(url.replaceAll("a", "*")); // Replace all 'a'

// 9. Split String into Array

const skills = "HTML,CSS,JavaScript,React";

console.log(skills.split(",")); // Array

const sentence = "JavaScript is awesome";
console.log(sentence.split(" "));

// 10. Concatenate Strings

const fullName = firstName.concat(" ", lastName);
console.log(fullName);

// 11. Repeat String

console.log("Hi! ".repeat(3));

// 12. Search Methods

const text = "I love JavaScript because JavaScript is powerful.";

console.log(text.search("JavaScript"));      // First index
console.log(text.match(/JavaScript/g));      // All matches
console.log(text.matchAll(/JavaScript/g));   // Iterator

// 13. Extract Using slice() and substring()

const language = "JavaScript";

console.log(language.slice(0, 4));     // Java
console.log(language.slice(-6));        // Script
console.log(language.substring(4, 10)); // Script

// 14. Padding

const number = "25";

console.log(number.padStart(5, "0")); // 00025
console.log(number.padEnd(5, "*"));   // 25***

/*
Useful for formatting IDs, OTPs, invoice numbers, etc.
*/

// 15. Convert String to Array

console.log(Array.from(gameName));

// 16. Compare Strings

console.log("apple".localeCompare("banana")); // -1
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple"));  // 0

// 17. Character Unicode

console.log(gameName.charCodeAt(0)); // Unicode of 'P'
console.log(String.fromCharCode(80)); // P

// 18. Escape Characters

console.log("Hello\nPrachi");      // New line
console.log("Hello\tPrachi");      // Tab
console.log("It's JavaScript");    // Single quote
console.log("She said \"Hello\""); // Double quotes


/*
Most Used String Methods

length
charAt()
at()
indexOf()
lastIndexOf()
includes()
startsWith()
endsWith()
toUpperCase()
toLowerCase()
substring()
slice()
trim()
trimStart()
trimEnd()
replace()
replaceAll()
split()
concat()
repeat()
search()
match()
matchAll()
padStart()
padEnd()
localeCompare()
charCodeAt()
Array.from()
*/