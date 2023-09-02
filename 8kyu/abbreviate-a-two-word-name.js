// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//note: get input of a name , and return it with the first letter of each name capitalized with a . separating.
//P recieve input, either array or string that is two names separated by space
//R return the first letter of each name/string, replace space with . to separate.
//E
function abbrevName(name){
//P // will recieve string of two words with whitespace between
    // convert the string into array 
    // remove the white space or replace it with .
    // return the 0 index of each element or put it in a variable
    // return or join it together by .
}


function abbrevName(name){
    return name.split(' ').map((word) => word[0] ? word[0].toUpperCase() : word.pop()).join('.')
}


function abbrevName(name){
    let nameArray = name.split(' ');
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}