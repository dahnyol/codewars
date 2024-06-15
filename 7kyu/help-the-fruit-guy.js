// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes

//     If the array is null/nil/None or empty you should return empty array ([]).
//     The rotten fruit name will be in this camelcase (rottenFruit).
//     The returned array should be in lowercase.

// function accepts an array of strings 
// return an array of strings in lowercase, if parameter is empty return empty array []
// removeRotten(["apple","banana","kiwi","melone","orange"]) -> ["apple","banana","kiwi","melone","orange"])
// removeRotten([]), [])
// function removeRotten(bagOfFruits){
  // let result = []
// loop over bagofruits
// replace 'rotten' and replace with '' nothing
// to.lowercase and push to array
// return array 

function removeRotten(bagOfFruits){
    if(!bagOfFruits) { return []; }
    
    return bagOfFruits.map(function(fruit) {
      return fruit.replace("rotten", "").toLowerCase();
    });
}


function removeRotten(bagOfFruits){
    return bagOfFruits ?
      bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase())
      : [];
}

const removeRotten = a => (a||[]).map(a=>a.replace('rotten','').toLowerCase())