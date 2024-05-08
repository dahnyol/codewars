// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

//P parameter expects an array, the array will have 1 and 0 to represent a binary value of an integer
//R return the integer number that is equivalent/represented by the array given
//E Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
// Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
// Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
// Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);

//P take array of numbers, join/change array of elements into string. [0,0,0,1]-> '0001' . convert to binary and return the integer equivalent
// math for binary is multiply each digit to element * 2^index
// parseInt takes in a string and converts it into a Number.
// parseInt takes 2parameters, the string to convert and the second is the base number of the number. In this case binary is base 2.
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
  };

// slower than parseInt
const binaryArrayToNumber = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}