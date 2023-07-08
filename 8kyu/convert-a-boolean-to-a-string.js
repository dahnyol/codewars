// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

const booleanToString = bool => bool ? 'true' : 'false';

//template literal
function booleanToString(bool) {
    return `${bool}`;
}

//toString method
function booleanToString(b){
    let bStr = b.toString('b');
    return bStr;
}