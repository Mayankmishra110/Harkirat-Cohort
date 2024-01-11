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

setTimeout(counter, 1 * 1000);
class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);

function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
