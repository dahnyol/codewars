// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// given array > 0 return product of array values
//P array of integers, will not be 0 or empty
//R return a single number, product of the array values
//E
function productArr(arr) {
//P // arr and reduce it, 
    // can also init result variable
    // loop through arr and multiply each time with result
    // return the result
}

const grow = (x) => x.reduce((acc, c) => acc *= c, 1);


function grow(x) {
    let result = 1;
    for(let i = 0; i < x.length; i++){
        result *= x[i];
    }
    return result;
}