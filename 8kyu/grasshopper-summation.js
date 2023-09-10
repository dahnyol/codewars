// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// notes: find the sum of every num starting from 1 to the input number given. the input number will be a + and > 0
//P given positive numbers greater than 0
//R return a single number that adds up all the elements in the array
//E
function sum(num){
//P // count from 1 to num given, add each number as the count increases
    // init result variable,
    // for loop, count from 1 to number, increase count++, end when count is higher than number
    // each loop, add the current i to the result.
    // return result
}


let summation = function(num){
    let result = 0;

    for(let i = 1; i <= num; i++){
        result += i;
    }
    return result;
}


// using math to optimize code can increase performance as the we do not need to run a for loop over and over depending on the input size. Instead simple math and the of the input doesn't matter.
// summation formulas: https://www.cuemath.com/summation-formulas/
const summation = n => n * (n + 1) / 2;