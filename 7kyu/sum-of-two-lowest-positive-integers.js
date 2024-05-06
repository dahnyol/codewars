// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//P array of positive numbers, will be at least 4 elements long
//R return a number representing the sum of the two lowest integers in the array
// (sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
// (sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
// (sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
// (sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
// (sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

//P take in an array, and sort it lowest to highest value
// add the [0] and [1] indexed elements
// return a Number representing the sum 

function sumTwoSmallestNumbers(numbers) {  
    let sortArr = numbers.sort((a, b) => a - b )
    return sortArr[0] + sortArr[1]
}

//destructuring
function sumTwoSmallestNumbers(numbers){
    let [num1, num2] = numbers.sort((a, b) > a - b)
    return num1 + num2
}