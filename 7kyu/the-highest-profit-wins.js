// Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//P parameter is an array of numbers or list. will always be > 1 will have a value (wont be null/undefined)
//R return an array of two numbers, the [lowest, highest]
//E const testCases = [
//     [[1, 2, 3, 4, 5], [1, 5]],
//     [[2334454, 5], [5, 2334454]],
//     [[5], [5, 5]]

//P function must check through the given array and check for the highest value/number. push the lowest number and then the highest number into an array to return

function minMax(arr){
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    return [lowest, highest]
}


const minMax = arr => [Math.min(...arr), Math.max(...arr)]


function minMax(arr) {
    let arr = arr.sort((a,b) => a-b);
    return [arr[0], arr[arr.length-1]];
}


function minMax(arr){
    let min = max = arr[0];
    arr.forEach((x) => {
        if (x < min) min = x;
        if (x > max) max = x;
    });
    return result = [min,max];
}