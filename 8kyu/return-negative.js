// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
//     The number can be negative already, in which case no change is required.
//     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// notes: given one number, make it negative (even if already negative)
//P one num, pos or negative
//R return the sum but -sum
//E
function makeNegative(number){
//P // can use -Math.abs(num)
    // can check num for pos or neg sign and return neg
}


const makeNegative = num => -Math.abs(num);


const makeNegative = num => {
    return Math.abs(num) * -1;
}


const makeNegative = function(num){
    return num > 0 ? -num : num;
}


function makeNegative(num){
    return num < 0 ? num : num * -1;
}