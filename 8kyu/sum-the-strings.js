// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//     If either input is an empty string, consider it as zero.
//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


// NOTE: takes 2 integers as strings. output the sum as a string. if input.lenght == 0 or [], consider it 0
//P takes 2 integers as strings
//R return the added integers as a string
//E
function sumStrings(a,b){
//P  // init result to hold concat
    // add Number(a) + Number(b);
    // return result as string
}


function sumStr(a,b) {
    let result = +a + +b;
    return `${result}`;
}


function sumStr(a,b) {
    return String(Number(a)+Number(b));
}


function sumStr(a,b) {
    return (+a+ +b)+''  
}


function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
}