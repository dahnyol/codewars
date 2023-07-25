// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let result = [];
    
    str.split('')
        .forEach((letter) => result.push(letter+letter))
    
    return result.join('')
}

//map with arrow syntax
const doubleChar = str => str.split('').map((char) => char + char).join('');

//spread operator
const doubleChar = str => [...str].map(char => char + char).join('');

//for loop
function doubleChar(str) {
    let word = '';
    
    for(let i = 0; i < str.length; i++){
        word += str[i] + str[i];
    }
    return word;
}

//regex
const doubleChar = str => str.replace(/./g, '$&$&');