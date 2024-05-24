// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//P parameter is an array of numbers
//R will return an array of even numbers
//E getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
// ([1,2]), [2])
// ([12,14,15]), [12,14])
// ([13,15]), [])
// ([1,3,9]), [])

//P new array to hold array to return
// loop through array 
// check for modulus or math equation for even/odd
// push to new array only if even
// return new array
// or use filter 

function getEvenNumbers(array){
    return array.filter((num) => !(num % 2))
}