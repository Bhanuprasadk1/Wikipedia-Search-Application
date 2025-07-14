//Arithmatic Operators

console.log(5 + 6); // Addition
console.log(5 - 6); // Subtraction
console.log(5 * 6); // Multiplication
console.log(5 / 6); // Division
console.log(5 % 6); // Modulus
console.log(10 ** 2); // Exponentiation

// Assignment Operators
let a = 10;
console.log(a); // Output: 10
a += 10
console.log(a); // Output: 20
a-=5
console.log(a); // Output: 15
a*=2
console.log(a); // Output: 30
a/=2    
console.log(a); // Output: 15   
a%=3    
console.log(a); // Output: 0
a **= 2
console.log(a); // Output: 0

// Comparison Operators
console.log(5 == 6); // Equal to
console.log(5 != 6); // Not equal to
console.log(5 === 6); // Strict equal to
console.log(5 !== 6); // Strict not equal to
console.log(5 > 6); // Greater than
console.log(5 < 6); // Less than
console.log(5 >= 6); // Greater than or equal to
console.log(5 <= 6); // Less than or equal to

// Logical Operators
console.log(true && false); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT

// Bitwise Operators
console.log(5 & 6); // Bitwise AND
console.log(5 | 6); // Bitwise OR
console.log(5 ^ 6); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift
console.log(5 >>> 1); // Unsigned right shift

// Ternary Operator
let age = 17;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes

// Typeof Operator
console.log(typeof 5); // Output: number    
console.log(typeof "Hello"); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object (this is a known JavaScript quirk)

// Instanceof Operator
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true
console.log("Hello" instanceof String); // Output: false (string literals are not instances of

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

// String Operators
let str1 = "Hlello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation
console.log(str1.length); // Length of string   
console.log(str1.toUpperCase()); // Convert to uppercase
console.log(str1.toLowerCase()); // Convert to lowercase
console.log(str1.includes("lo")); // Check if substring exists
console.log(str1.indexOf("e")); // Find index of substring
console.log(str1.slice(1, 4)); // Extract substring
console.log(str1.replace("lo", "xx")); // Replace substring 
console.log(str1.split("l")); // Split string into array
console.log(str1.trim()); // Remove whitespace from both ends
console.log(str1.charAt(2)); // Get character at index  
console.log(str1.charCodeAt(2)); // Get ASCII code of character at index
console.log(str1.startsWith("H")); // Check if string starts with substring
console.log(str1.endsWith("lo")); // Check if string ends with substring
console.log(str1.localeCompare(str2)); // Compare two strings
console.log(str1.match(/l/g)); // Match all occurrences of substring
console.log(str1.search("l")); // Search for substring and return index
console.log(str1.repeat(2)); // Repeat string
console.log(str1.concat(" ", str2)); // Concatenate strings 
console.log(str1.padStart(10, "0")); // Pad string at start
console.log(str1.padEnd(10, "0")); // Pad string at end     
console.log(str1.split("").reverse().join("")); // Reverse string
console.log(str1.toString()); // Convert to string
console.log(str1.valueOf()); // Get primitive value of string
console.log(str1.normalize()); // Normalize string
console.log(str1.toLocaleLowerCase()); // Convert to lowercase based on locale
console.log(str1.toLocaleUpperCase()); // Convert to uppercase based on locale

if(20>30){
    console.log("20 is greater than 30");
}
else if(20<30){
    console.log("20 is less than 30");
}
else{
    console.log("20 is equal to 30");
}

//looing statements
for(let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

let array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log("Element: " + array[i]);
}
for(let i in array) {
    console.log("Index: " + i + ", Element: " + array[i]);
}
for(let element of array) {
    console.log("Element: " + element);
}
let i = 0;
while(i<array.length) {
    console.log(array[i]);
    i++;
}
i=0;
do {
    console.log(array[i]);
    i++;
}while(i < array.length);
// Break and Continue
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("Breaking at 5");
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log("Skipping even number: " + i);
        continue; // Skip the rest of the loop for even numbers
    }
    console.log(i);
}

//functions Declaration with no arguments
function greet(){
    console.log("Welcome to JavaScript!");
}

greet();

// Function Declaration with arguments
function add(a, b) {
    console.log(a + b);
}
add(5, 10); // Output: 15

//Function with return value
function add(a,b){
    return a + b;
}
console.log(add(5,10)); // Output: 15

//Function Expression
let division = function(a,b){
    console.log(a/b);
}
division(10,2);

//Arrow Function
let sub = (a,b)=>{
    console.log(a-b);
}
sub(10,5); // Output: 5

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE");
})();

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}   
console.log(multiply(5)); // Output: 5 (b defaults to 1)

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}   
console.log(sum(1, 2, 3, 4)); // Output: 10

// Function with spread operator
function sum(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Accessing elements
console.log(fruits.length); // Length of array
console.log(fruits.push("Date")); // Adding an element
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
console.log(fruits.pop()); // Removing the last element
console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(fruits.unshift("Mango")); // Adding an element at the beginning
console.log(fruits); // ["Mango", "Apple", "Banana", "Cherry"]
console.log(fruits.shift()); // Removing the first element
console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(fruits.indexOf("Banana")); // Finding index of an element
console.log(fruits.includes("Cherry")); // Checking if an element exists
console.log(fruits.slice(1, 3)); // Slicing the array
console.log(fruits.splice(1, 1, "Orange")); // Splicing the array
console.log(fruits); // ["Apple", "Orange", "Cherry"]
console.log(fruits.reverse()); // Reversing the array
console.log(fruits.sort()); // Sorting the array
console.log(fruits.join(", ")); // Joining elements into a string
console.log(fruits.map(fruit => fruit.toUpperCase())); // Mapping elements
console.log(fruits.filter(fruit => fruit.startsWith("A"))); // Filtering elements
console.log(fruits.reduce((acc, curr) => acc + " " + curr)); //
//Reducing the array to a single value
console.log(fruits.forEach(fruit => console.log(fruit))); // Iterating over elements
console.log(fruits.find(fruit => fruit.startsWith("B"))); // Finding an element
console.log(fruits.findIndex(fruit => fruit.startsWith("C"))); // Finding index of an element
console.log(fruits.every(fruit => fruit.length > 3)); // Checking if every element
// satisfies a condition
console.log(fruits.some(fruit => fruit.startsWith("A"))); // Checking if some elements
// satisfy a condition
console.log(fruits.fill("Grapes", 1, 3)); // Filling elements
// Filling elements in the array
console.log(fruits.copyWithin(0, 1, 3)); // Copying elements
// Copying elements within the array
console.log(fruits.toString()); // Converting array to string
console.log(fruits.concat(["Kiwi", "Mango"])); // Concatenating arrays
console.log(fruits.flat()); // Flattening nested arrays
console.log(fruits.flatMap(fruit => [fruit, fruit.toLowerCase()])); //
// Flattening and mapping elements
console.log(fruits.at(1)); // Accessing element at a specific index
console.log(fruits.keys()); // Getting keys of the array
console.log(fruits.entries()); // Getting entries of the array
console.log(fruits.values()); // Getting values of the array

// Creating a new array with Array.from
let newArray = Array.from(fruits);
console.log(newArray); // Output: ["Apple", "Orange", "Cherry"]

// Creating a new array with Array.of
let anotherArray = Array.of("Grapes", "Mango", "Pineapple");
console.log(anotherArray); // Output: ["Grapes", "Mango", "Pineapple"]

//objects
let person = {  
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name); // Accessing properties
console.log(person["age"]); // Accessing properties using bracket notation
person.greet(); // Calling a methoD
console.log(Object.keys(person)); // Getting keys of the object
console.log(Object.values(person)); // Getting values of the object
console.log(Object.entries(person)); // Getting key-value pairs of the object
console.log(person.hasOwnProperty("name")); // Checking if property exists
console.log(person instanceof Object); // Checking if person is an instance of Object
console.log(JSON.stringify(person)); // Converting object to JSON string
let newPerson = JSON.parse('{"name": "Jane", "age": 25}'); // Parsing JSON string to object
console.log(newPerson); // Output: { name: 'Jane', age: 25 }
console.log(Object.assign(person, newPerson)); // Merging objects
console.log(person); // Output: { name: 'Jane', age: 25, greet: [Function: greet] }
console.log(Object.freeze(person)); // Freezing the object (making it immutable)
console.log(Object.seal(person)); // Sealing the object (preventing new properties)
console.log(Object.getOwnPropertyDescriptor(person, "name")); // Getting property descriptor
console.log(Object.getOwnPropertyNames(person)); // Getting all property names
console.log(Object.getPrototypeOf(person)); // Getting prototype of the object
console.log(Object.is(person, newPerson)); // Checking if two objects are the same
console.log(Object.create(person)); // Creating a new object with person as prototype

//Number methods
console.log(Number.isInteger(5)); // Checking if a number is an integer
console.log(Number.isNaN(NaN)); // Checking if a value is NaN
console.log(Number.parseFloat("3.14")); // Parsing a string to a float
console.log(Number.parseInt("42")); // Parsing a string to an integer
console.log(Number.isFinite(10)); // Checking if a number is finite
console.log(Number.isSafeInteger(9007199254740991)); // Checking if a number    
// is a safe integer
console.log(Number.MAX_VALUE); // Maximum value a number can have
console.log(Number.MIN_VALUE); // Minimum value a number can have
console.log(Number.EPSILON); // Smallest difference between two representable numbers
console.log(Number.NaN); // Not a Number value
console.log(Number.POSITIVE_INFINITY); // Positive infinity value
console.log(Number.NEGATIVE_INFINITY); // Negative infinity value
console.log(Number.prototype.toString.call(123)); // Converting number to string
console.log((3.14159).toFixed(2)); // Rounding to 2 decimal places

//event listeners
function alertBox(){
    alert("Button Clicked!");
}

document.getElementById("alertBox").onclick = function(){
    alert("Button");
}
document.getElementById("Box").addEventListener("click",function(){
    alert("one more button clicked");
});

//keyboard events
document.getElementById("inputBox").addEventListener("keydown",function(e){
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.target);
    console.log(e.type);
});

document.getElementById("inputBox").addEventListener("keyup",function(e){
    console.log("Key released: " + e.key);
});

document.getElementById("new").addEventListener("mouseover",function(){
    console.log("Mouse over on div");
});

document.getElementById("new").addEventListener("mouseout",function(){
    console.log("Mouse out of div");
});
document.getElementById("new").addEventListener("click",function(){
    console.log("Div clicked");
});
document.getElementById("new").addEventListener("dblclick",function(){
    console.log("Div double clicked");
});
