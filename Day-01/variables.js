/* JavaScript Variables */

// `const` → Cannot be reassigned
const accountId = 2301607;

// `let` → Can be reassigned
let accountEmail = "example@gmail.com";
accountEmail = "newemail@gmail.com";

// `let` is also useful when the value may change later
let accountPassword = "12345";
accountPassword = "234";

// Variable declared without `let`, `const`, or `var`
// ❌ Avoid this practice
accountCity = "Udaipur";
accountCity = "Bengaluru";

// `let` variable can be declared without an initial value
let accountState;


// const vs let

// ❌ Not allowed because `accountId` was declared with `const`
// accountId = 2;



// Output
console.log(accountId);

// Display all account information in a table
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);


// Why avoid `var`?

/*
    Prefer `let` and `const` instead of `var`.

    `var` is function-scoped rather than block-scoped,
    which can sometimes lead to unexpected behavior.

    Modern JavaScript:
        - Use `const` when the value should not be reassigned.
        - Use `let` when the value needs to change.
        - Avoid `var` in modern JavaScript.
*/