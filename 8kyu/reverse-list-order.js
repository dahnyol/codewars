// In this kata you will create a function tha takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// *[1, 2 ,3 ,4] -> [4, 3, 2, 1]
// *[9, 2, 0, 7] -> [7, 0, 2, 9]

//My solution
function reverseList(list){
    return list.reverse();
}

//arrow syntax
const reverseList = list => list.reverse();

//for loop
const reverseList= (list) => {
    let reversedArray = [];
    //start at the last element of the array and increment down to 0
    for(let i = list.length - 1; i >= 0; i--){
        reversedArray.push(list[i])
    }
    return reversedArray;
}