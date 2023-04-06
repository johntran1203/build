//charat is to look up a character
"Hello".charAt(1); // e
console.log('hello'.charAt(0))

// theres toLowerCase() and toUpperCase() if you want to capitalize something or not
console.log( "Hello".toLowerCase() );// hello
console.log( "Hello".toUpperCase() ); // HELLO

//An important property built-in to strings is length. We can easily look up how many characters are stored in a string by accessing this property:
console.log( "a".length ); // 1
console.log( "Hello".length ); // 5

// We learned how to look up a character by index. Now it's time to find the index of a specific string!

// There is a method on strings called indexOf that will help us find the first index of a string. Let's see this in action:
"Hello".indexOf("e"); // 1