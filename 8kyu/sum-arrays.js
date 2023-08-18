// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398
// Assumptions
//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//notes: take in array of nums and return sum, if empty array return 0.
//P takes in array of numbers, can be pos/neg , array change in size, only given numbers
//R return sum of numbers or 0 if empty
//E
function sumArray(array){
//P     //reduce method or
        //init result var, default it to 0
        //loop through array, each loop add the current element/number to the result var
        //return the result var
}

const sum = (numbers) =>
    "use strict";
numbers.reduce((acc, c) => acc + c, 0)


function sum (array){
    let result = 0;
    
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}