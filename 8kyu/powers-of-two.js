// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


// NOTE: function takes positive integer n, returns list of all powers of 2 from 0 to n inclusive
//P +num
//R return an array of numbers of n
//E
function powerOfTwo(n){
//P // init result array to populate 
    // iterate loop n times
    // each iteration push(2**n[i]) / (2**i)
    // return result array
}


function powersOfTwo(n){
    let result = [];

    for(let i = 0; i <= n; i++){
        result.push(2**i);
    };
    return result;
}


function powersOfTwo(n){
    let result = [];

    for(let i = 0; i <= n; i++){
        result.push(Math.pow(2, i));
    };
    return result;
}


function powersOfTwo(n){
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
}
// Array.from() creates an array from (array-like) object.
// {length: n+1} is an Object with a single property 'length' set to n+1
// (v, k) => 2 ** k is the map function in the format (element, index) => 2 ** index

// Let's say n = 2
// when you do Array.from() to this object { length : 3 } you will get [undefined, undefined, undefined]
// Add the optional map function, and each item in the array is added as 2 ** index instead of undefined
// The theory is due to Duck-typing: "If it walks like a duck, quacks like a duck, it is a duck." An Object with a length property can pass as an Array since it has a length property.
// In this case, Array.from() encounters a length property and creates an array of that size.


const powersOfTwo = n =>
  [...Array(++n)].map((_, idx) => 2 ** idx);