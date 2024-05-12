// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//P parameter is an array of integers
//R return a single number representing the sum of the differences between consecutive pairs in the array
//E assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
//  assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);

//P sort array of integers from largest to lowest (desc)
// if array.length <= 1 result 0
// loop over sorted array, on each subtract current element by current element + 1 (the next element)
// push result , which is the differences of the elements, into array  
// reduce result array to sum after getting the differences array 

function sumOfDifferences(arr) {
    if(arr.length < 2) {
        return 0;
    }
    arr = arr.sort((a,b) => a-b) // desc
  
    let difArr = [];
  
    for(let i = 0; i < arr.length - 1; i++){
        let diff = Math.abs(arr[i] - arr[i+1])
        difArr.push(diff)
    }
  
    return difArr.reduce((acc, c) => acc + c, 0)
}

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);


// The logic behind it is that the difference between the maximum and minimum elements of an array is the same as adding up all the differences between adjacent elements.
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}