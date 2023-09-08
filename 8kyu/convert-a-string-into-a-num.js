// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// notes: function to transform string into a number, both are immutable so must create copy. Can use to number methods like +string, Number(string), finding the CharAt,etc
//P input will be strings, each string will be a valid representation of a intgeral number ( do not need to watch for edge cases )
//R return a number
//E
function convertString(string){
//P // return Number(string), or +string will convert
}  


const stringToNumber = string => Number(string);


function stringToNumber(str){
    return +str;
}