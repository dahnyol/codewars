// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//notes: given array of numbers, return additive inverse , each positive element becomes negative and vice versa
//P array of positive or negative numbers
//R return an array of negative or positive numbers
//E
function invertVal(array){
//P // make copy of the array input, can use map when returns an array copy
    // iterate through the copied array and Math.abs or multiply by -1 each element/number
    // return that new array
}

function invert(array){
    return array.map((number) => {
        number * -1;
    })
}


const invert = array => array.map((num) => num * -1);


// forEach returns undefined, map returns array copy.
function invert(array) {
    let invert = [];
    array.forEach(num => num < 0 ? invert.push(Math.abs(num)) : invert.push(-num)); 
    return invert;
}