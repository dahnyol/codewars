// Your function takes two arguments:
//     current father's age (years)
//     current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// notes: function takes 2 args, fatherAge, sonAge. how many years until the father be twice as old as his son. always greater than 0
//P takes 2 input positive nums
//R return a year
//E
function twiceAsOld(dad, son){
//P // multiply the sons age by 2 
    // find the difference between the sonsAge*2 with the dad current age
    // return that difference
    // need to use Math.abs(ageDifference) as the father age may be more than twice the age and return a negative num
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld);
}


function twiceAsOld(dadAge, sonAge){
    return dadAge > 2*sonAge ? dadAge - sonAge*2 : sonAge*2 - dadAge;
}