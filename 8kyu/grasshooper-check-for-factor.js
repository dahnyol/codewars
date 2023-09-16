// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

// notes: function takes 2 args, factor and base. check if the base is a factor of the base. return true or false
// to find factor, divide the numbers. if remainder is 0 than the number is a factor. 
//P base is a non-negative number, factor is a positive number.
//R return true or false
//E
function isFactor(base, factor){
//P // check if base % factor === 0
}


const checkForFactor = function(base, factor){
    return base % factor === 0;
}


const checkForFactor = function(base, factor){
    return !(base % factor);
}