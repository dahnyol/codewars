// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// note: function with a size parameter. the size will be positive and whole numbers only. return an alternating 1 and 0 depending on the size argument.
//P positive and whole number for size
//R return 1 string of 1s and 0s. 1 is always first, then 0
//E
function stringy(size) {
//P // initiate a loop with the input size as the number of loops
    // loop will alternate printing 1 then 2.
}

function stringy(size) {
    let result = '';
    for(let i = 0; i < size; i++){
        if(i % 2){
            result += 0
        } else {
            result += 1
        }
    }
    return result;
}


function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
}

function stringy(size) {
    return [...Array(size).keys()].map((_,i)=> i%2 ? 0 : 1).join('')
}

/* .slice is both an array function and a string function that essentially have the same behavior. So just to be clear, it doesn't return an array in this instance, it returns a string (more specifically a substring of the string it was called on).*/
const stringy = size => "10".repeat(size).slice(0,size);

const stringy = size => "10".repeat(Math.floor(size/2)).slice(0,size);