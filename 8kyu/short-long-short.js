// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// notes: return a concat string a+b+a , strings will not be the same length but may be empty , b.length = 0;
//P 2 string parameters, a  and b
//R return a + b + a
//E
function solution(a, b){
//P init new variable to hold result string
    // check a.length and b.length, 
    // concat short + long + short
}


function solution(a, b){
    let result = '';
    if(a.length > b.length){
        result = b+a+b 
    } else {
        result = a+b+b
    }
    return result;
}


const solution = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}


function solution(a, b){
    let short;
    let long;

    if (a.length < b.length) {
      short = a;
      long = b;
    }else {
      short = b;
      long = a;
    }
    return short + long + short
}