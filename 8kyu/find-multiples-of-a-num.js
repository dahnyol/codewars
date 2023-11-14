// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// note: function takes two values (will be > 0). Limit will always be higher than base. first value is the base, second is the limit
//P input are two nums, both num/value > 0. 2nd value limiter will always be higher than 1st value base.
//R returns an array populated by base multiples up to limit
//E
function findMultiples(integer, limit) {
//P    // init new array or use map to return an array
    // use the first integer as the base.
    // use the second integer as the limit
    // populate array with the multiples of the first value/base up to the second value/limit
    // return the array
}

// To output an array of multiples, where int indicates the multiple factor, and limit indicates how much it will run to.

//     let result = [] sets up a variable array placeholder so we can populate it with our loop results.

//     for(start, condition, adjust) to create looping iterations, where we start with our 'int', condition to be 'limit', and update/add our i based on our 'int' factor.

//     push(i) adds the updated i's into our variable placeholder array.


function findMultiples(integer, limit) {
    let result = [];
    
    for(let i = integer; i <= limit; i+=integer){
      result.push(i);
    };
    return result;
};