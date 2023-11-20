// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// note: function takes string input, return the same string with the first and second elements swapped
//P one parameter that we split into an array 
// or two parameters, firstname and lastname
//R return a string with the elements swapped
//E
function swap(string){
//P 
//shuffle the name
//take a string.
//split into an array
//append index 1 into index 0 in a new array
//append index 0 into index 1 in the new array
//join the new array into a new string and return it
}


function nameShuffler(string){
    let swappedString = string.split(' ');
    swappedString.reverse();
    return swappedString.join(' ');
}


const nameShuffler = str => str.split(' ').reverse().join(' ');


function nameShuffler(str){
    const arr = str.split(' ')
    const shuffledName = arr.reverse()
    return shuffledName.join(' ');
}


function nameShuffler(str){
    let arr = str.split(' ');
    return arr[1] + ' ' + arr[0];
}


function nameShuffler(str){
    [firstName, lastName] = str.split(' ');
    return `${lastName} ${firstName}`;
}


function nameShuffler(str){
    let strReverse = str.split(' ');
    return [strReverse[1], strReverse[0]].concat().join(' ');
}


function nameShuffler(str){
    let arr = str.split(' ');
    let strReverse = [];
    for(let i in arr){
        strReverse.push(arr[i])
    }
    return strReverse.join(' ');
}