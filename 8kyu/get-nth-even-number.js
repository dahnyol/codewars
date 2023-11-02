// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// The input will not be 0.


// notes: function take an input number, it will return the even number at the input number position.
//P parameter takes an input number. input will be > 0
//R return even number at the position in the input number
//E
function getNthEvenNumber(n){
//P // if number 10 is given, then return the 10th even number, starting from 1 which is index 0. 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
// if counting from 0, account for -2 due to starting count at the number 0 and begins even THEN odd-> 0, 2, 4, 6 ... 
// if counting from 1, account for starting count at number 1, which begins odd THEN even-> 2, 4, 6, 8 ...

}


function nthEven(n){
    n * 2 - 2
}


const nthEven = (num = 1) =>{
    const next = num * 2;
    const result = next -2;
    return result;
}


const nthEven = (n) => (n - 1) * 2; 