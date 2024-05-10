// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//P takes an array 
//R returns the array, each element will be a string that is its index + 1 in front of the original element
// E ssert.deepEqual(number([]), [], 'Empty array should return empty array');
// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                

//P function will take the array, and iterate over each element.
// on each element it will attach a string that is the index+1 of the current element being operated on, followed b : and the element.

const number = array => array.length < 1 ? [] : array.map((el, index) => `${index+1}: ${el}`)


const number = function(array){
    let res = []

    if(array.length < 1) {
        return [];
    }
    array.forEach((el, index) => {
        res.push(`${index + 1}: ${el}`)
    })
    return res;
}