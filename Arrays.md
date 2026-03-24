# 📘 JavaScript Arrays – Complete Methods Guide

This file contains **all important JavaScript array methods** with examples and outputs.

---

# 🔰 1. Creating Arrays

```javascript
let arr = [1, 2, 3];
let arr2 = new Array(4, 5, 6);
🔰 2. Basic Methods
length
let arr = [1, 2, 3];
console.log(arr.length);

Output: 3

toString()
let arr = [1, 2, 3];
console.log(arr.toString());

Output: "1,2,3"

join()
let arr = [1, 2, 3];
console.log(arr.join("-"));

Output: "1-2-3"

🔰 3. Add / Remove Elements
push()
let arr = [1, 2];
arr.push(3);
console.log(arr);

Output: [1, 2, 3]

pop()
let arr = [1, 2, 3];
arr.pop();
console.log(arr);

Output: [1, 2]

shift()
let arr = [1, 2, 3];
arr.shift();
console.log(arr);

Output: [2, 3]

unshift()
let arr = [2, 3];
arr.unshift(1);
console.log(arr);

Output: [1, 2, 3]

🔰 4. Splice & Slice
slice()
let arr = [10, 20, 30, 40];
console.log(arr.slice(1, 3));

Output: [20, 30]

splice()
let arr = [10, 20, 30];
arr.splice(1, 1);
console.log(arr);

Output: [10, 30]

🔰 5. Searching Methods
indexOf()
let arr = [10, 20, 30];
console.log(arr.indexOf(20));

Output: 1

lastIndexOf()
let arr = [10, 20, 10];
console.log(arr.lastIndexOf(10));

Output: 2

includes()
let arr = [10, 20, 30];
console.log(arr.includes(20));

Output: true

find()
let arr = [10, 20, 30];
console.log(arr.find(x => x > 15));

Output: 20

findIndex()
let arr = [10, 20, 30];
console.log(arr.findIndex(x => x > 15));

Output: 1

🔰 6. Iteration Methods
forEach()
let arr = [1, 2, 3];
arr.forEach(x => console.log(x));
map()
let arr = [1, 2, 3];
console.log(arr.map(x => x * 2));

Output: [2, 4, 6]

filter()
let arr = [10, 20, 30];
console.log(arr.filter(x => x > 15));

Output: [20, 30]

reduce()
let arr = [1, 2, 3];
console.log(arr.reduce((a, b) => a + b, 0));

Output: 6

🔰 7. Sorting Methods
sort()
let arr = [3, 1, 2];
arr.sort((a, b) => a - b);
console.log(arr);

Output: [1, 2, 3]

reverse()
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

Output: [3, 2, 1]

🔰 8. Combining Arrays
concat()
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));

Output: [1, 2, 3, 4]

spread operator (...)
let a = [1, 2];
let b = [3, 4];
console.log([...a, ...b]);
🔰 9. Flattening Arrays
flat()
let arr = [1, [2, 3]];
console.log(arr.flat());

Output: [1, 2, 3]

flatMap()
let arr = [1, 2];
console.log(arr.flatMap(x => [x, x * 2]));
🔰 10. Checking Methods
some()
let arr = [1, 2, 3];
console.log(arr.some(x => x > 2));

Output: true

every()
let arr = [1, 2, 3];
console.log(arr.every(x => x > 0));

Output: true

🔰 11. Convert / Utility
Array.from()
console.log(Array.from("abc"));

Output: ['a','b','c']

Array.isArray()
console.log(Array.isArray([1,2]));

Output: true

🔥 Important for Interviews

Focus on:

map()

filter()

reduce()

find()

splice()

sort()

🎯 Final Summary

👉 Array = collection of multiple values in single variable
👉 Most used = map, filter, reduce
👉 Mutable methods = push, pop, splice
👉 Immutable methods = map, filter, slice

💡 Pro Tip

Use:

map → transform

filter → select

reduce → combine


---
