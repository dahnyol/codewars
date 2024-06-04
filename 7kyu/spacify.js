// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

//P parameter is a string input
//R return a string
//E(spacify('hello world'),'h e l l o   w o r l d');
// (spacify('12345'),'1 2 3 4 5'); 
//P
function spacify(str) {
    //split str into array
    // iterate over array
    // if(not the last element in the array)
    // add whitespace after the element
    // return the array as a string
}

const spacify = str => str.split('').join(' ')

const spacify = str => [...str].join(' ');

const spacify = str => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      result = result + str[i] + (i === (str.length - 1) ? '' : ' ')
    }
    return result
}