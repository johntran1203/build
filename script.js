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