// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//note: function with 2 parameters, each being a number of petals. return true or false depending on condition if the same odd/even petals then false/ else true
//P 2 parameters, 2 numbers
//R return true or false
//E 
function opposites(flower1, flower2) {
//P //check if flower1 is even or odd
    //check if flower2 is even or odd
    //compare flower1, flower2
    //if both odd or even, true
    //else return false
}

//test case
opposites(20, 11) // true 
opposites(2, 100) // false


function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0) 
    return false;
    else 
    return true;
}


function lovefunc(flower1, flower2) {
    if(flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}


const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;


const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;