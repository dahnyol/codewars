// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]


// NOTE: function takes 2 integers a, b. return an array of all integers between the input parameters a and b, inclusive.
//P 2 integers, a and b
//R return array [a >= int between <= b] inclsuve
//E
function between(a, b){
//P // init result array []; 
    // for loop count starting from a to b.
    // each loop push the number to array
    // return array
    // can use copy a, b into an array and use map/filter
}


function between(a, b){
    let result = [];

    for(let i = a; i <= b; i++){
        result.push(i);
    };
    return result;
}


const between = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => idx + a);