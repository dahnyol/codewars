// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//notes: will get number n, start counting from 1
// populate an array with numbers 
//P will only get numbers, one number
//R return an array full of numbers 
//E
function count(n) {
//P //init arr for result
    //start loop from 1 to n
    //each loop push the number to result arr
    //return result arr
}
//test case
count(15) // 15 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function monkeyCount(n) {
    let result = [];

    for(let i = 1; i <= n; i++) {
        result.push(i)
    }
    return result;
}


function monkeyCount(n) {
    return Array.from(Array(n), (_, i) => ++i)
}

const monkeyCount = n => [...Array(n)].map((_, i) => i + 1)