# 📦 Primitive vs Reference – Stack vs Heap

## 🔹 Main Idea

* **Primitive types** → stored **by value** → typically in **stack memory**
* **Reference types** → stored in **heap**; stack holds only a **reference (address)**

👉 Core concept: **Stack = values / references**, **Heap = actual data**

---

## 📊 Stack vs Heap (Comparison)

| Feature           | **Stack**                                 | **Heap**                          |
| ----------------- | ----------------------------------------- | --------------------------------- |
| **Stores**        | Primitive values + references (addresses) | Actual objects, arrays, functions |
| **Size**          | Limited                                   | Large / dynamic                   |
| **Speed**         | Fast                                      | Slower (via reference)            |
| **Lifetime**      | Short (scope-based)                       | Until no references (GC)          |
| **Structure**     | LIFO (Last In First Out)                  | No fixed order                    |
| **Usage**         | Local variables, function calls           | Complex/dynamic data              |
| **Copy behavior** | Value copy (primitives)                   | Reference copy                    |

---

## 🧠 Stack Memory

* Stores **local variables + function execution context**
* Works in **LIFO order**
* Stores:

  * Primitive values
  * References (addresses of heap objects)

### Example:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

👉 Copy creates **independent values**

---

## 🗂️ Heap Memory

* Stores **actual objects & arrays**
* Dynamic size
* Managed by **Garbage Collector**

### Example:

```javascript
let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Bella";

console.log(obj1.name); // Bella
```

👉 Both variables point to **same object**

---

## 🔹 Primitive Types (Stored by Value)

Types:

* `string`
* `number`
* `boolean`
* `undefined`
* `null`
* `symbol`
* `bigint`

### Behavior:

* Stored directly in stack
* Copy = **new value**

---

## 🔹 Reference Types (Stored by Reference)

Types:

* `object`
* `array`
* `function`

### Behavior:

* Stored in heap
* Stack holds reference (address)
* Copy = **same reference**

---

## ⚖️ Primitive vs Reference

| Feature  | Primitive     | Reference                       |
| -------- | ------------- | ------------------------------- |
| Storage  | Stack (value) | Heap (data) + Stack (reference) |
| Copy     | New value     | Same reference                  |
| Mutation | Independent   | Shared                          |
| Example  | `10`, `"hi"`  | `{}`, `[]`, `function(){}`      |

---

## ⚠️ Important Concepts

### 1. Copy Behavior

```javascript
let x = 5;
let y = x;
y = 10;

console.log(x); // 5
```

```javascript
let a = { value: 5 };
let b = a;
b.value = 10;

console.log(a.value); // 10
```

---

### 2. Comparison

```javascript
console.log(5 === 5);     // true
console.log({} === {});   // false
```

👉 Objects are compared by **reference**, not value

---

## 🎯 Why This Matters

1. Avoid unintended mutations
2. Understand copying behavior
3. Debug memory-related bugs
4. Crack interview questions easily

---

## 🧾 Summary Table

| Term          | Meaning                        |
| ------------- | ------------------------------ |
| **Stack**     | Stores values + references     |
| **Heap**      | Stores actual objects          |
| **Primitive** | Value-based (independent copy) |
| **Reference** | Address-based (shared object)  |

---

## 🧠 Easy Mnemonic

👉 **Primitive = Personal copy**
👉 **Reference = Shared address**
