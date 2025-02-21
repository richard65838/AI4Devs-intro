// Function to reverse a string
const reverseString = str => str.split('').reverse().join('');

// Example usage
const originalString = "Hello, World!";
const reversed = reverseString(originalString);

// Output the result
console.log("Original String:", originalString);
console.log("Reversed String:", reversed);