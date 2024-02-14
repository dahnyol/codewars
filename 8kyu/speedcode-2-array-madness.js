// SpeedCode #2 - Array Madness
// Objective

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// Get your timer out. Are you ready? Ready, get set, GO!!!


function arrayMadness(a, b) {
    // (a.length >= 1 && b.length >= 1) 
    // iterate over a array. square each element, then add them together
    //iterate over b array, cube each element, then add them together
    //compare a and b
    //a > b true
}

const arrayMadness = (a, b) => {
    return  a.reduce((acc, c) => acc + c**2, 0) > 
            b.reduce((acc, c) => acc + c**3, 0)
}

function arrayMadness(a,b){
    let sumA = 0;
    let sumB = 0;
    for(let num of a) {
        sumA += num**2
    }
    for(let num of b) {
        sumB += num**3
    }
    return sumA > sumB
}
