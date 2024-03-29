// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// Fix function below
// function correctTail(bod, tail ;
  
//     sub = body.substr(bodylength-(tail.length)
    
//     if sub = tail) ;
//       return true
//     }
//     else 
//       return false
  
function correctTail(body, tail) {
  
    let sub = body.substr(body.length-(tail.length))
    
    if (sub === tail) 
      return true    
    else 
      return false
}


// re-writing instead of debugging
function correctTail(bod, tail) {
    return bod[bod.length-1] === tail
}
  
const correctTail = (x,y)=>x.endsWith(y)

const correctTail = (body, tail) => body.slice(-1) === tail[0]

const correctTail = (body, tail) => body.substr(-1) == tail;