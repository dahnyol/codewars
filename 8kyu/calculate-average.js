// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//note: find average of given numbers in array
//P array given of numbers
//R return single number average or 0 if empty
//E
function average(array){
//P //can use reduce
    //can init result variable to 0
    //loop through array and add it to result
    //return result/array.length 
}

function findAverage(array) {
    if(array.length == 0){
      return 0;
    } else {
      return array.reduce((acc, c) => acc + c, 0) / array.length
  }
}


const findAverage = array => array.length == 0 ? 0 : array.reduce((acc, c) => acc + c, 0) / array.length;