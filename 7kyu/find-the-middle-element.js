// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//P expect an array of distinct numbers, no multples or length>3
//R return an integer that represents the index of the middle value
//E doTest([2, 3, 1], 0);
// doTest([5, 10, 14], 1);
// doTest([2.1, 3.2, 1.4], 0);
// doTest([5.9, 10.4, 14.2], 1);

//P function will take an array of 3 ints
// iterate over array, on each iteration check the current value and its index
// compare it to the next element
// find the middle value, return the index of that value

function gimme(triplet){
    // get the indexOf all the elements in the array triplet
    // sort the array and return the element at index 1
    let res = triplet.indexOf([...triplet].sort((a,b)=> a-b)[1])
    return res;
}

let gimme = function (inputArray) {

    let highNum = Math.max(...inputArray)
    let lowNum = Math.min(...inputArray)
    
    return inputArray.findIndex((item)  => {
    
      if (item > lowNum && item < highNum) {
        return item
       }
    })
};

const asc = (a, b) => a - b;
const gimme = arr => 
	arr.indexOf(arr.slice().sort(asc)[1]);


function gimme(triplet){
    if(triplet[0] > triplet[1] && triplet[0] < triplet[2] || triplet[0] < triplet[1] && triplet[0] > triplet[2]){
    return 0
    }
    if(triplet[1] > triplet[0] && triplet[1] < triplet[2] || triplet[1] < triplet[0] && triplet[1] > triplet[2]){
    return 1
    } else {
    return 2
    }
}