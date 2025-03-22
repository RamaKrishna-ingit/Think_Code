// JavaScript - All Major Concepts in One Code with Clear Explanations

// 1. VARIABLES (let, const, var)
let age = 25; // Mutable (can change)
const PI = 3.14; // Immutable (cannot change)
var name = "Alice"; // Old way (avoid using var)

// 2. DATA TYPES (Primitive & Reference)
let num = 10; // Number
let str = "Hello"; // String
let isTrue = true; // Boolean
let bigInt = 9007199254740991n; // BigInt
let sym = Symbol("unique"); // Symbol
let notDefined; // Undefined
let empty = null; // Null (intentional absence of value)

let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array (special object)

// 3. FUNCTIONS (Regular & Arrow)
function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greetArrow("Bob"));

// 4. SCOPE (Global, Local, Block)
var globalVar = "I am global";
function checkScope() {
  let localVar = "I am local";
  if (true) {
    let blockVar = "I am block-scoped";
  }
  // console.log(blockVar); // Error: blockVar is not defined
}

// 5. HOISTING (Function & Variable)
console.log(hoistedVar); // Undefined (not an error due to hoisting)
var hoistedVar = "I am hoisted";

hoistedFunction(); // Works due to function hoisting
function hoistedFunction() {
  console.log("I am hoisted too!");
}

// 6. CLOSURES (Function with Lexical Scope)
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
  };
}
const closureFunc = outerFunction("Outside");
closureFunc("Inside");

// 7. CALLBACK FUNCTIONS (Passing functions as arguments)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
fetchData((message) => console.log(message));

// 8. CALLBACK HELL (Nested Callbacks causing complexity)
function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 1000);
}
function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 1000);
}
function step3(cb) {
  setTimeout(() => {
    console.log("Step 3 done");
    cb();
  }, 1000);
}
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed!");
    });
  });
});

// 9. PROMISES (Handling asynchronous tasks)
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});
promiseExample.then((res) => console.log(res));

// 10. PROMISE HELL (Chaining multiple promises leading to complexity)
function promiseStep1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Step 1 done");
      resolve();
    }, 1000);
  });
}
function promiseStep2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Step 2 done");
      resolve();
    }, 1000);
  });
}
function promiseStep3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Step 3 done");
      resolve();
    }, 1000);
  });
}
promiseStep1()
  .then(() => promiseStep2())
  .then(() => promiseStep3())
  .then(() => console.log("All promise steps completed!"));

// 11. ASYNC/AWAIT (Simplified promise handling)
async function asyncExample() {
  let result = await promiseExample;
  console.log(result);
}
asyncExample();

// 12. EVENT LOOP (Understanding JS concurrency)
console.log("Start");
setTimeout(() => console.log("Timeout Callback"), 0);
Promise.resolve().then(() => console.log("Promise Callback"));
console.log("End");

// ... Other concepts remain unchanged ...

// CONCLUSION: This single file covers almost all important JS concepts in a simple, understandable way!
