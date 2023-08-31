// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

//note: write function that doubles the input array and returns it.
//P will get an array of numbers
//R return an array of numbers 
//E
function doubleMap(arr) {
//P   //init new variable empty array, if for loop and pushing into array
    // or map method returns array after performing on each element
}


function maps(x){
    return x.map((num) => num * 2);
}


const maps = x => x.map((num) => num*2);


function maps(x){
    let doubledValue = [];
    
    for(let i = 0; i < x.length; i++){
        doubledValue.push(x[i] * 2);
    }
    return doubledValue;
}