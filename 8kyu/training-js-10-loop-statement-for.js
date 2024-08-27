// Task

// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// expect one param that will be an array of numbers, always a valid input, no special chars, no strings, no other data structure
// return statement an array with two arrays inside of it, one representing all odds and the other all evens

function pickIt(arr){
    let odd=[],even=[];
    // iterate over the array of numbers
    for (let i = 0; i < arr.length; i++) {
        // check for odd/even
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }    
    return [odd,even];
}


function pickIt (arr) {
    let odd = []
    let even =[]
         
    for (var x of arr) {
        // if x % 2 true, it means there is a remainder, because evaluting the remainder to 1 is a truthy 
        // if x % 2 has no remainder, it will return false because evaluting the remainder to 0 is a falsey
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
}