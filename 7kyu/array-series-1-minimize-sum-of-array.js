// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.
// Array/list will contain positives only.
// Array/list will always have even size.Array
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// find the lowest sum possible when multiplying two integers in an array. we want the lowest * highest number in the array , then the next lowest * highest, etc... and sum them all together
// even size array everytime, no need for edge cases

const minSum = arr => 
arr.sort((a,b) => b - a)
  .reduce((prev, curr) => prev + curr * arr.pop(), 0)


function minSum(arr) {
    let sorted = arr.sort((a,b) => a-b);
    let sum = 0;
    
    for (let i=0; i<arr.length/2; i++){
      sum += sorted[i] * sorted[sorted.length - (1 + i)];
    
    return sum;
    }
}