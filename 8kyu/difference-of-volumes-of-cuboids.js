// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


// NOTE: function takes 2 lists of integers. list a, list b. each list [int1, int2, int3] all nums > 0. Must find difference in volumes. try one line
//P two lists: a = [n1, n2, n3], b = [n1, n2, n3]. all positive > 0
//R return one number that represents the difference in volumes.
//E
function differenceOfCuboidVolumes(dimensionsOfCube1, dimensionsOfCube2){
//P // each list/array multiply the values inside
    // compare each value/ find the difference
    // may need to find which num is bigger first or can just return the result of the num as a positive.
    // return the difference as a positive number
}


function findDifference(a, b) {
    let volume1 = a.reduce((acc, c) => acc * c);
    let volume2 = b.reduce((acc, c) => acc * c);
    return Math.abs(volume1 - volume2);
}


// one line
const findDifference = (a, b) => Math.abs(a.reduce((acc, c) => acc * c) - b.reduce((acc, c) => acc * c));

// add initial value 1
const findDifference = (a, b) => Math.abs(a.reduce((acc, c) => acc * c, 1) - b.reduce((acc, c) => acc * c, 1));


// without reduce
function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}


function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
}