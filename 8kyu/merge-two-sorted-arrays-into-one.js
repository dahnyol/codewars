// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


// notes: given two sorted arrays merge into one array in asecnding order. arr1 arr2 must be arrays with > 0 integers, if both empty return empty array. may need to sort the two given arrays and check to remove duplicates in new ascending ordered array

function mergeArrays(arr1, arr2){
    // first sort each array 
    // sortedArray1 = arr1.sort(a,b) => a - b
    // sortedArray2 = arr2.sort(a,b) => a- b
    // create new array to hold merged sorted arrays
    // if arr1.length && arr2.length < 1
    // return []
    // merge sortedArray1 and sortedArray2 
    // do not add duplicates in merged array
    // sort the merged array in ascending order
    // return the merged array 
}


function mergeArrays(arr1, arr2){
    let mergedArr = [];

    if(arr1.length < 1 && arr2.length < 1){
        return mergedArr;
    } else{
        mergedArr = arr1.concat(arr2);
    }
    return [...new Set(mergedArr)].sort((a, b) => a - b);
}


function mergeArrays(arr1, arr2){
    return [... new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}


function mergedArrays(arr2, arr2){
    return arr1.filter((item) => !includes(item))
                .concat(arr2)
                .sort((a, b) => a - b);
}


function mergedArrays(arr1, arr2){
    let arr3 = arr1.concat(arr2) // merge array
    let sortedArr3 = arr3.sorted((a, b) => a - b) // sort arr
    return [...new Set(sortedArr3)]; // return with no duplicates 
}