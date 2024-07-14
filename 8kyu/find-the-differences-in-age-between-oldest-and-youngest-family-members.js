// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// given an array of numbers
// return an array of 3 numbers
// diffAge([82, 15, 6, 38, 35]), [6, 82, 76]);
// diffAge[57, 99, 14, 32]), [14, 99, 85]);

//function differenceInAges(ages){
    // sort ages oldest to youngest
    // youngest = sortedages[0] || sortedages[sortedages.length - 1] 
    // oldest = sortedages[0] || sortedages.slice(-1) 
    // return [[youngest], [oldest], [oldest - youngest]

function differenceInAges(ages){
    let sortArr = ages.sort((a,b) => a - b)
    let youngest = sortArr[0]
    let oldest = sortArr[sortArr.length - 1]
    return [youngest, oldest, oldest - youngest]
}
  
function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
}