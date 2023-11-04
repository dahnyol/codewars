// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// note:
//P input unique numbers in ascending order
//R return a list of unique numbers in asecending order in which the values increment by 1 from the min value in the list to the max
//E 
function pipeFix(numbers){
//P // declare new array
    // init min variable to hold the first number[0]
    // init max variable to hold the last number[number.length - 1]
    // loop from min to max values, increment 1 each time
}

function pipeFix(numbers){
    let result = [];
    let min = numbers[0]
    let max = numbers[numbers.length - 1]
    for(let i = min; i <= max; i++){
        result.push(i)
    }
    return result;
}


let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
// 1.Creating an array of length based on subtracting the last number from the first number -> length: nums.pop() - nums[0] + 1
// 2.Adding at each index the first number from the array + current index -> i + nums[0]


const pipeFix = (numbers) =>
  [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].map((_, idx) => numbers[0] + idx);
// [...Array(numbers[numbers.length - 1])] -> turns numbers string into an array. 
// creating an array of length based on subtracting the last number from the first number
// adding each index at the first number from the array + current index


function pipeFix(numbers){
    let result = [];
    
    let start = numbers.shift();
    let end = numbers.pop();
  
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
}