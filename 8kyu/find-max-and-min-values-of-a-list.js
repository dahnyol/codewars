// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
//     You may consider that there will not be any empty arrays/vectors.

//notes: make two functions that recieve a list of int, return largest and lowest in list
//P take list of integer, 2 functions so 2 lists of ints
//R return min and max of the combined list
//E
function max(list){
//P    //sort list and return element 0
}
function min(list){
    //sort list and return element list.length - 1 or reverse sort and return element 0
}

function max(list) {
    let sortedArr = list.sort((a, b) => b - a)
    //descending order aka largest to smallest
    return sortedArr[0]
}

function min(list) {
    let sortedArr = list.sort((a, b) => a - b)
    //ascending order aka smallest to largest
    return sortedArr[0]
}


// Math.min, Math.max methods and spread syntax (...)
const min = (list) = Math.min(...list);
const max = (list) = Math.max(...list);


// for loop and compare each number to find min/max
let max = function max(list) {
    let max = list[0];

    for(let i = 0; i < list.length; i++){
        let current = list[i];
        if(current > max)
        max = current;
    }
    return max;
}

let min = function min(list) {
    let min = list[0];

    for(let i = 0; i < list.length; i++){
        let current = list[i];
        if(current < min)
        min = current;
    }
    return min;
}