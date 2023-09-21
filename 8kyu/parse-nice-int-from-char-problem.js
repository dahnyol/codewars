// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


// notes: given a random number x, x will be between 0 - 9 randomly. return the girls age as int, assume always valid string, first character in the string is always a number

//P one parameter, x , will be always valid, 0-9 randomly
//R return 'x years old' , x should be returned as integer
//E
function parseIntFromChar(x){
//P // return parseInt(x)
}


function getAge(inputString){
    return parseInt(inputString)
}


const getAge = parseInt;


function getAge(inputString){
    return parseInt(inputString[0]); 
}