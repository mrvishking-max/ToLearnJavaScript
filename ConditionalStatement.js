/*
===========================================
JAVASCRIPT IF...ELSE STATEMENTS
===========================================

JavaScript supports the following forms of if...else statement:

1) if statement
2) if...else statement
3) if...else if... statement
4) nested if...else statement
*/


/* ===========================================
   1. IF STATEMENT
   ===========================================

   Syntax:
*/

if (expression) {
    // Statement(s) to be executed if expression is true
}


/* ===========================================
   2. IF...ELSE STATEMENT
   ===========================================

   Syntax:
*/

if (expression) {
    // Statement(s) to be executed if expression is true
} else {
    // Statement(s) to be executed if expression is false
}


/* ===========================================
   3. IF...ELSE IF... STATEMENT
   ===========================================

   Syntax:
*/

if (expression1) {
    // Statement(s) to be executed if expression1 is true
} else if (expression2) {
    // Statement(s) to be executed if expression2 is true
} else if (expression3) {
    // Statement(s) to be executed if expression3 is true
} else {
    // Statement(s) to be executed if none of the above are true
}


/* ===========================================
   4. NESTED IF...ELSE STATEMENT
   ===========================================

   Syntax:
*/

if (expression1) {
    // Statement(s) to be executed if expression1 is true

    if (expression2) {
        // Statement(s) to be executed if expression2 is true
    } else {
        // Statement(s) to be executed if expression2 is false
    }

} else {
    // Statement(s) to be executed if expression1 is false
}