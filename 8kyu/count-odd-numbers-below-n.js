// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


// NOTE: function takes number n, returns the number of positive odd numbers below n. input 7 -> 3 because 1, 3, 5 below 7. 
//P one +num,
//R return number representing count of odd numbers
//E
function positiveOddNum(n){
//P // init count to keep track of how many positive odd numbers
    // iterate loop n times
    // check on each loop if current n[i] is odd
    // if yes odd, then add one to count , count++
    // return count
}


function oddCount(n){
    return Math.floor(n/2);
}


// this solution does not work for large numbers/inputs in this kata. Must use the above as we only need to count the numbers and works much quicker.
// function oddCount(n){
//     count = 0;
//     for(let i = 0; i < n; i++){
//         if(i % 2 !== 0){
//             count++
//         }
//     }
//     return count;
// }