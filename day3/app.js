// Project Title: Simple Calculator
// Project Description: Create a simple calculator that performs basic arithmetic operations
// (addition, subtraction, multiplication, division) on two numbers.
// Project Requirements:
// • Use variables to store the two input numbers and the result of the calculation.
// • Use the prompt() method to get the two input numbers from the user.
// • Use console.log() method to display the result of the calculation to the user.

const numOne =  parseInt(prompt("what is your first number?"))
const numTwo =  parseInt(prompt("what is your second number?"))

// console.log(numOne, numTwo)

function add(a, b) {
    return a + b
}

function subtract(a,b) {
    return a -b
}

function multiply (a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

console.log(add(numOne,numTwo))
console.log(subtract(numOne,numTwo))
console.log(multiply(numOne,numTwo))
console.log(divide(numOne,numTwo))
