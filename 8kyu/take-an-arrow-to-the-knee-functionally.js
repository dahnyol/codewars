// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
// Examples

// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// var ArrowFunc = function(arr) {
//     return arr.map( => ).join(''); //Complete this function
// }

//refactor the above function
//P parameter takes an array of numbers
//R returns an array of corresponding string integers
//E ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
// ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')
//P first refactor into arrow syntax
// on each map loop, use given suggestion, String.fromCharCode()
// .join it to turn array of string integers into a string

const ArrowFunc = arr => arr.map((code) => String.fromCharCode(code)).join('')
 

const ArrowFunc = (arr) => String.fromCharCode(...arr)