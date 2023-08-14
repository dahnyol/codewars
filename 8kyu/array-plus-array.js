// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

//note get two arrays, add them together and get the sum of all elements. 
//P two arrays, each of them only int numbers 
//R sum of all elements, one value
//E
function arrayPlus(array1, array2) {
//P //add/concat array1 and array2
// sum all elements in combined array
// return the sum
}

//testcase
arrayPlus([2,4,5], [10,4,4]) // -> [2,4,5,10,4,4] -> 29
arrayPlus([-2,4,5], [10,-4,-4]) // 17

function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.reduce((acc, c) => acc += c, 0);
}


const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, c) => acc += c, 0);


//spread syntax
const arrayPlusArray = (arr1, arr2) => {
    let arr = [...arr1, ...arr2];
    return arr.reduce((acc, c) => acc + c, 0);
}

//for loop
function arrayPlusArray(arr1, arr2) {
    let sum = 0;

    for(let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for(let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}

