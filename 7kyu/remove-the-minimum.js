// The museum of incredibly dull things

// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//P parameters will be expecting an array of integers.
//R  return an empty list if the input is an empty array
//else return a new array of integers with the lowest value int removed or the integer with the lowest index in the array
//E * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//P copy original array
// find min of the copy, assign to var
// splice array copy, starting at the indexOf(min), remove 1 element
// return array copy 

// filtering out the smallest number by index
function removeSmallest(numbers) {
    return numbers.filter((_, index) => index != numbers.indexOf(Math.min(...numbers)))  
} //may be bad practice, high o(n^3) if not declaring min variable


// pushing numbers except the smallest into a new array
function removeSmallest(numbers) {
    // find index of the smallest number
    const smallestIndex = numbers.indexOf(Math.min(...numbers));
    // create a new var to hold empty array result
    const newArray = [];
    // loop over given array 
    numbers.forEach((number, i) => {
      // if the current element index is not the index of the smallest number, push to new array
      if (i !== smallestIndex) 
        newArray.push(number)
    })
    // return new array with every element added except the smallestIndex of the smallest number
    return newArray;
}


// slice out the smallest number by index
function removeSmallest(numbers) {
    // copy array
    numbers = numbers.slice(0);
    // math min will find the lowest index minimum number in the array and assign to const
    const min = Math.min(...numbers);
    // removes element
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}


function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}