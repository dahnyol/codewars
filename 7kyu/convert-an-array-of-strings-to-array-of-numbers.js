// Oh no!

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

//P parameter takes in an array of string integers
//R return an array of non-string integers with the same elements as input array
//E toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])
//P new variable
// loop through array and add to new variable as string
// return new var
// reduce, map methods ?


function toNumberArray(stringarray){
    return stringarray.map((el, i) => +el)
}

function toNumberArray(stringarray){
    let arr = [];
    for(let i = 0; i < stringarray.length; i++){
      arr.push(+stringarray[i]);
    }
    return arr;
}

const toNumberArray = stringarray => stringarray.map(Number)

//Parse int
const toNumberArray = stringarray => stringarray.map(parseFloat);

//The difference between parseInt and + or Number() -> these function shows only when incorrect number is provided. Number will return NaN when parseFloat tries to trim non-numeric chars and parse what remains.