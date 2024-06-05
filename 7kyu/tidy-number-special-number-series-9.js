// Definition

// A Tidy number is a number whose digits are in non-decreasing order.
// Task

// Given a number, Find if it is Tidy or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .

//     Return the result as a Boolean

// Input >> Output Examples

// tidyNumber (12) ==> return (true)

// Explanation:

// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)

// Explanation:

// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

// tidyNumber (1024) ==> return (false)

// Explanation:

// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

// tidyNumber (13579) ==> return (true)

// Explanation:

// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

// tidyNumber (2335) ==> return (true)

// Explanation:

// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3 


//P given a number
//R return a true or false 
//E  Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(9672),false);
//   Test.assertEquals(tidyNumber(2789),true);
//   Test.assertEquals(tidyNumber(2335),true);
//P function tidyNumber(n){
// split the number into an array
// iterate over the array
// if it is not the last element, check if the current element is bigger than the next element
// return true if true for every element
// else false

function tidyNumber(n){
    let str = String(n) // turn number input into string
    let arr = str.split('').map(Number) // split string into array of strings, map to change array of strings into array of numbers
    return arr.every((el, i, arr) => !i || el >= arr[i - 1]) // returns true if it is the first element at index[0] or returns true if current element is greater than or equal to the previous element
}

const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    return true;
}


const tidyNumber = n =>
String(n).split('').sort().join('') == n


function tidyNumber(n) {
    let m = 9;
  
    while (n) {
  
      if (n % 10 > m)
        return false;
      
      m = n % 10;
      n = n / 10 | 0;
    }
    return true;
  }// Going from the rightmost digit to the left, we store that specific digit in the variable "m". "m" is initialized as the highest possible value for a digit (9). As we move through the digits, we compare the next digit with the value stored in "m" (ie. the digit to it's right). if the next digit is greater than "m" then the input number was not in non-decreasing order and therefore we must return false. Otherwise, every digit must be less than or equal to the digit to it's right (ie. non-decreasing order) and so we return true.