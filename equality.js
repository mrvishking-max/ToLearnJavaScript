// ======================================
// Equality & Type Coercion in JavaScript
// ======================================

console.log("== vs === Examples\n");

// 1. Number vs String
console.log("5 == '5'  :", 5 == "5");     // true
console.log("5 === '5' :", 5 === "5");   // false

// 2. Number vs Boolean
console.log("\n0 == false  :", 0 == false);     // true
console.log("0 === false :", 0 === false);     // false

// 3. null vs undefined
console.log("\nnull == undefined  :", null == undefined);   // true
console.log("null === undefined :", null === undefined);   // false

// 4. Extra tricky cases
console.log("\n' ' == 0 :", " " == 0);       // true
console.log("[] == 0  :", [] == 0);         // true
console.log("[] === []:", [] === []);       // false

// 5. NaN case
console.log("\nNaN == NaN  :", NaN == NaN);     // false
console.log("NaN === NaN :", NaN === NaN);     // false

// ======================================
// END
// ======================================