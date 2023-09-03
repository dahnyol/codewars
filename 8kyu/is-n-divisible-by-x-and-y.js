// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//notes: input of pos num, check if n % x and n% y === 0;
//P will have two numbers, positives
//R return "T/F because n is divisible by x and y"
//E
function divisibleBy(n, y, x){
//P    //check if n % y === 0
    //check if n % x === 0
    //if both true = true statement 
    //if one false = false statement because n not divsible by num
    //if both false = false statement n is neither divisible by x and y
}


function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0)
    return `true because ${n} is divisible by ${x} and ${y}`;
    else if(n % x === 0 && n % y > 0)
    return `false because ${n} is not divisible by ${y}`
    else if(n % x > 0 && n % y === 0)
    return `false because ${n} is not divisible by ${x}`
    else
    return `false becasue ${n} is neither divisible by ${x} nor ${y}`
}

// solution only needs T and F not string statement
function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0)
    return true
    else
    return false
}


const isDivisibleBy = (n, y, x) => n % x === 0 && n % y === 0;


function isDivisibleBy(n, y, x) {
    return !(n % x || n % y)
}