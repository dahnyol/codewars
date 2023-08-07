// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

//get array of integers made of strings and numbers, sum all the values, strings must be turned to nums or vice versa
//P numbers and strings in an array
//R return a number
//E
function sumArr(arr){
//P    //make all the elements in arr a number
    // add those numbers
    // return the result of adding those numbers
}

//test case
sumArr(1,'2','3',4) // 10
sumArr('4','4', -4, 4) // 12 

function sumMix(arr) {
    return arr.reduce((acc, c) => +acc + +c, 0)
}


function sumMix(x){
    let result = 0;
    
    for(let i = 0; i < x.length; i++){
        result += +x[i];
    }
    return result;
}