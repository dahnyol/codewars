// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.


// NOTES: function takes array input of integers, will be positive and no empty/null cases. iterate over array and each element check if it has a square root, if it does, return the square root in place in the array, else square the number.
// instead of checking with %, can use 
// function oddCount(n){
//     return Math.floor(n/2);
// } to check for odd/even ? 
//P array of integers
//R return an array with elements squared or square root of element
//E
function toSquareOrNot(array){
//P // init new array to push integers into
    // can check array with for loop, over length of array.length
    // on each loop, check if element there is a sqrt.root 
    // if not a sqrt root, square it , else put sqrt root
    // return new array
}


const squareOrSquareRoot = array => {
    return array.map((num) => Math.sqrt(num) % 1 ? num*num : Math.sqrt(num))
}


function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
}