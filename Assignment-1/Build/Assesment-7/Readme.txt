JavaScript Fundamentals Assignment

1.What is JavaScript?

JavaScript is a programming language used mainly for web development. It makes web pages interactive and dynamic by allowing changes to content, animations, form validations, and more.

2.Variables and Types:

javascript:
let userAge = 21;
let userName = "John Doe";
console.log(userAge);
console.log(userName);

3.Comments in JavaScript:

javascript:
/*
 This function takes a name and returns a greeting message.
 It's useful for saying hello to people!
*/

4.Operations:

javascript:
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

5.Data Types:

javascript:
let greeting = "Hello, World!";
let year = 2024;
let isJavaScriptFun = true;
let fruits = ["apple", "banana", "cherry"];

6.Functions in JavaScript:

javascript:
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser("Alice"));

7.if Else in JavaScript:

javascript
let temperature = 35;
if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's cool outside!");
}


8.FOR LOOP:

javascript:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


9.Loose vs Strict Equality:

javascript:
console.log(5 == '5');  // true - loose equality Dont check type
console.log(5 === '5'); // false - strict equality Checks type
