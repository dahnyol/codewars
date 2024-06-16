// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

// Try to avoid using the % (modulo) operator.

// parameter expects a string of integers
// return bool
//  ('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
// ('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
// ('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
// ('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
// function divisibleByThree(str){
    // avoid modulus, use tip from school
    // var to hold result
    // loop through str
    // convert each str to number type, add to res
    // loop through result
    // add each element together
    // check if the total is divisible by 3
    // return res % 3 === 0

    function divisibleByThree(str){
        let res = [];
        for(let i = 0; i < str.length; i++){
            let num = Number(str[i])
            res.push(num)
        }
        let checkNum = res.reduce((a, c) => a + c)
        return checkNum % 3 === 0
    }

    function divisibleByThree(str){
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
          let element = str[i];
          sum += Number(element);
        }  
        if (sum % 3 === 0) { 
          return true;
        }
        return false;
      }


// use methods 
   function divisibleByThree(str) {
        return str.split('') // split to convert str to arr
        .reduce((a,c) => a + +c, 0) % 3 === 0; 
    }

    function divisibleByThree(str) {
        return [...str]
        .reduce((a,c) => a + +c, 0 ) % 3 === 0;
    }