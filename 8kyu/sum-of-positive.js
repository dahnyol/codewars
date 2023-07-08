// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((acc, curr) => curr > 0 ? acc += curr : acc, 0)
    //return arr.reduce((acc, curr) => Math.sign(curr) == 1 ? acc += curr : acc, 0)
}

//for loop
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0) {
        sum += arr[i];
      }  
    }
    return sum;
}

//forEach
const positiveSum = arr => {
   let sum = 0;
   
   arr.forEach((element => {
     if(element > 0){
       sum += element;
     }}));
   return sum;
} 