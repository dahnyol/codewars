// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// notes: function takes a input number array, iterate over the numbers in the array and square each one. add them together and return it
//P input num array
//R return sum of all the squared elements in the array
//E
function squareAndSum(array){
//P // init result variable
    // iterate over array, each time adding to the result the current element**2
    // return the result
    // for loop, can use map? reduce?
}

function squareSum(n){
    let result = 0;

    for(let i = 0; i < n.length; i++){
        result += n[i]**2;
    }
    return result;
}


function squareSum(n){
    return n.reduce((acc, c) => acc + c**2, 0)
}


function squareSum(n){
    return n.map(num => num **2).reduce((acc, c) => a + b, 0);
}


function squareSum(numbers){
    let sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
}