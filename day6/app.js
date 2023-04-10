// The goal of this project is to write a function that reverses the order of the array

// Step 1: Define the function
// Create a function called reverseArray that takes in an array as a parameter and returns a new
// array with the same elements in reverse order.
function reverseArray(arr) {
    let result = []
    for (let i= arr.length-1; i >=0; i--) {
        result.push(arr[i])
    }
    return result
}
// Step 2: Test the function
// Test the reverseArray function with some sample arrays to see if it works correctly.
console.log(1,2,3,4)

// Step 3: Implement the function as a method on the Array object
 Array.prototype.reverseArray = function() {
    let result = []
    for (let i= arr.length-1; i >=0; i--) {
        result.push(arr[i])
    }
    return result
}
// You can also implement the reverseArray function as a method on the Array object so that you
// can use it directly on any array.
// Step 4: Test the method
// Test the reverseArray method by calling it on some sample arrays.