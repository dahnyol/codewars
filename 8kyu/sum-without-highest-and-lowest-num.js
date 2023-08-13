// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//given an array of numbers, sum all except lowest and highest value. if double value ok, just get rid of first/last element by value
//if empty value or empty array or list with 1 element return 0
//P get array 
//R return one sum or 0, check for null/empty arr/1 element arr
//E
function sum(array){
//P //check array.length to check if return 0
    //if not then sort the array
    //pop off/remove first and last 
    //return sum
}

function sumArray(array) {
    if(array == null || array.length <= 1){
        return 0;
    }
    return array.sort((a,b) => a - b)
            .slice(1, -1)
            .reduce((acc, c) => acc + c, 0)
}

function sumArray(array) {
    if(!array){
        return 0;
    }
    let sortedArr = array.sort((a, b) => a - b);
    let total = 0;
    for(let i = 1; i < sortedArr.length - 1; i++){
    //start i = 1 to skip first element at index 0
    //array.length - 1 to end loop before the last element in the array.
    total += sortedArr[i];
    }
    return total;
}