// var a = 7;
// a = 3;
// console.log(a);

// let a = 5;
// a = 6;
// console.log(a);

let b = 5;
b = 6; //since its const so we cant change the variables data
console.log(b);

//Write a person to greet a person with 1st and last name

let a = "Mayank";
let c = "Mishra";

let isMarried = false;
console.log("My name is " + a + " last Name is " + c);

if (isMarried == false) {
  console.log("No He is unmarried");
} else {
  console.log("Yes, Mayank is Married");
}

let summ = 0;
for (let z = 1; z <= 1000; z++) {
  summ += z;
}

console.log(summ);

const ages = [22, 34, 35, 58, 51];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log("Even no. " + ages[i]);
  } else {
    console.log("Not even " + ages[i]);
  }
}

//Callback

function calculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

//SetTimeout
const value = calculateArithmetic(1, 2, sum);
console.log(value);

function greet() {
  console.log("hello");
}

function greetAlien() {
  console.log("hello world");
}

setTimeout(greetAlien, 3 * 1000);
setTimeout(greet, 4 * 1000);

//Callbacks

function suumm(num1, num2, demoFn) {
  let resultt = num1 + num2;
  demoFn(resultt);
}

function displayResult(data) {
  console.log("Result for the function is:" + data);
}

const ans = suumm(2, 4, displayResult);

// console.log(ans);

function maya() {
  console.log("maya");
}

setTimeout(maya, 2 * 1000);

// setInterval(maya, 1 * 1000);
//Create a counter in javascript that counts from 30 to 0

function counter() {
  for (let i = 30; i >= 0; i--) {
    console.log(i);
  }
}

setInterval(counter, 1 * 1000);
