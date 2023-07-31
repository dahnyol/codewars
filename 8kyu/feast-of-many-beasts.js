// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//notes on question: one rule: dish must start and end with same letters as animal name
//great blue heron -> garlic naan or chickadee -> chocolate cake
//2 arguments animal name and dish
//return true or false to indicate condition
//always lower case, always 2+ letters, spaces and hypens appear except start and end of string, no numbers

//P 2 parameters, name, dish.  will be lower case, no numbers, hypens and spaces ignored if start/end of string. always 2+ letters
//R return true or false value.
//E
function feast(name, dish){
//P //init var to hold element at name index 0
    //init var to hold element at name index.length -1
    //init var to hold element at dish index 0
    //init var to hold element at dish index.length - 1
    //compare name 0 with dish 0 if letter match
    //compare name.length -1 with dish.length -1 if lettter match
    // if both T return true, else return false
}

// testcases
feast('great blue heron', `garlic naan`) // return true
feast('chickadee', 'chocolate cake') // return true
feast('dog', 'hotdog') // false

function feast(name, dish) {
    let nameFirst = name[0]
    let nameLast = name[name.length - 1];
    let dishFirst = dish[0]
    let dishLast = dish[dish.length - 1];
    
    return (nameFirst == dishFirst && nameLast == dishLast);
    // if(nameFirst == dishFirst && nameLast == dishLast) {
    //     return true;
    // } else {
    //     return false;
    // }
};


function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
        return true;
    }
    else {
        return false;
    }
};


// slice 
const feast = (beast, dish) => beast.slice(0, 1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1);