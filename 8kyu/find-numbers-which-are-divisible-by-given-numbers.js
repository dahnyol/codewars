// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


// NOTE: function([...arg1], arg2) -> iterate arg2 over each arg1 element, check if arg1 % arg2 === 0, if true add to new array to hold and return result
//P array of nums and a single num 
//R return an array of numbers
//E
function isDivisible(array, divisor){
//P // loop through array
    // check each loop if the array[i] is divisible by the divisor given
    // return the numbers divisible in an array
}


function divisibleBy(numbers, divisor){
    let result = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % divisor === 0){
            result.push(numbers[i]);
        }
    }
    return result;
}


function divisibleBy(numbers, divisor){
    return numbers.filter((num) => (num % divisor === 0) )
}