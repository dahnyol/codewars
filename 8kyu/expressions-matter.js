// Task

//     Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//     In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

// Example

// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

//     1 * (2 + 3) = 5
//     1 * 2 * 3 = 6
//     1 + 2 * 3 = 7
//     (1 + 2) * 3 = 9

// So the maximum value that you can obtain is 9.
// Notes

//     The numbers are always positive.
//     The numbers are in the range (1  ≤  a, b, c  ≤  10).
//     You can use the same operation more than once.
//     It's not necessary to place all the signs and brackets.
//     Repetition in numbers may occur .
//     You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


// NOTES: function takes 3 numbers in an array. find the maximum value when adding two integers in the array and multiplying it by the 3rd. return a single number with the max value possible.
//P list/array of 3 integers
//R returns a single num that is the max value obtained when adding two ints and multiplying it by one
//E 
function maxValue(num1, num2, num3){
//P // create a object/array or even math.max() with the all the possible expression combinations stored
    // return the expression value that is the highest value
}


function expressionMatter(a, b, c){
    let expressions = Math.max(
        a + b + c,
        a * b * c,
        a + b * c,
        (a + b) * c,
        a * b + c,
        a * (b + c)
    )
    return expressions;
}


function expressionMatter(a, b, c){
    return Math.max(
        a + b + c,
        a * b * c,
        a + b * c,
        (a + b) * c,
        a * b + c,
        a * (b + c)
    );
}


function expressionMatter(a, b, c) {
    let values = [(a*(b+c)), (a*b*c), (a+b*c), ((a+b)*c), (a+b+c)];
    return Math.max(...values);
}


function expressionMatter(a, b, c) {
    let arr = [
      a + b + c,
      a * b * c,
      a * b + c,
      a + b * c,
      a * (b + c),
      (a + b) * c,
    ];
    let max = arr.sort( (a, b) => b - a );
    return max[0];
}