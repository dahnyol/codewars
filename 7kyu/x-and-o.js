// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let countX = 0;//initialize variable to keep count of x
    let countO = 0;//init var to keep count of o
    let strArr = str.split('');//change string into array

    strArr.forEach((word) => {
        //loop through the string as an array
        if(word.toLowerCase() == 'x') {
            countX++ 
        } //add count++ to x if true or o if true
        if(word.toLowerCase() == 'o') {
            countO++
        }
    })
    return countX == countO ? true : false; //compare counts 
}

//filter and split
const XO = str => {
    str = str.toLowerCase().split(''); //lower case and split into arr
    
    return str.filter(x => x == 'x').length === str.filter(o => o == 'o').length;
    //filter elements matching x in the string array
    //filter elements matching o in the string array
    //compare the length of each filter. (returns true if both match)
}