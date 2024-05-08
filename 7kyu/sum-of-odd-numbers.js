// Given the triangle of consecutive odd numbers:

//              1               =1
//           3     5            =8  = 2 ^ 3
//        7     9    11         =27 = 3 ^ 3
//    13    15    17    19      =64 = 4 ^ 3
// 21    23    25    27    29   =125 = 5 ^ 3
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//P one parameter is a number which represents the row in the triangle
//R return a number representing the sum of whatever row the parameter input 
// assert.strictEqual(rowSumOddNumbers(1), 1);
// assert.strictEqual(rowSumOddNumbers(42), 74088);

//P number input determines how many rows of numbers to count to.
//R return the sum of the row. 
//E assert.strictEqual(rowSumOddNumbers(1), 1);
// assert.strictEqual(rowSumOddNumbers(42), 74088);

//P each row of numbers are odd. each row down increases by +2, (1,4,6,8...)
// function takes input Number. Number will determine how many rows to count down to. The numbers in each row are odd numbers only. the number of elements in each row increases by 1. 
// mathmetical formula over programming logic better big o notation

function rowSumOddNumbers(n) {
    return n**3
    // Math.pow(n, 3)
    // n * n * n    
}