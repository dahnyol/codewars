// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//P parameters in array of integers
//R return an array of even integers
//E noOdds( [0,1] ), [0] )
//  noOdds( [0,1,2,3] ), [0,2] )
//P iterate over array and check modulus or math equation to find if current integer is even or odd
// if it is even, push to a result array
// return the result array

function noOdds( values ){
    let result = [];

    for(let i = 0; i < values.length; i++){
        if(values[i] % 2 === 0){
            result.push(values[i])
        }
    }
    return result
}

const noOdds = values => values.filter((num) => num % 2 === 0)
const noOdds = values => values.filter(num => !(num % 2))

function noOdds( values ){
    function isEven(number){
      return number%2 == 0;
    }
    
    return values.filter(isEven);
}

//bitwise operator
function noOdds( values ){
    return values.filter((n)=> (n & 1) == 0);
}