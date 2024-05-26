// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//P given an array of number type integers and string type integers
//R return number integer
//E divCon([9, 3, '7', '3']), 2);
// divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
// divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 

//P
//iterate over array
//if current element is Number Type, add to new nonstringnumbers
//if current element is String type, add to new stringnumbers
//add up non string integers
//convert string int into numbers and add
//return nonstring - string result
// can use reduce

function divCon(x){
    return x.reduce((acc, curr) => 
    typeof curr === 'number' ? acc + curr 
    : acc - Number(curr),0)
}

function divCon(x){
    let nonStringInt = 0
    let stringInt = 0

    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === 'number') {
            nonStringInt += x[i]
        } else
        if(typeof x[i] === 'string') {
            stringInt += Number(x[i])
        }
    }
    return nonStringInt - stringInt
}