// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//P parameter is an array of numbers
//R return an array of one char strings representing corresponding vowels
//E input: isVow([101,121,110,113,113,103,121,121,101,107,103])
// output: ["e",121,110,113,113,103,121,121,"e",107,103])

//P 
// function isVow(a){
//    return a.map(code => {
//         if(code is a vowel) {
//             return the vowel
//         }
//         return code
//    })
// }

function isVow(a){
    return a.map((code) => {
        let char = String.fromCharCode(code)
        let vowels = ['a','e','i','o','u']
        if (vowels.includes(char)){
            return char;
        }
        return code;
    })
}

function isVow(a){
    for (let i = 0, l = a.length; i < l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
}

function isVow(a){
    return a.map(i => {
        if (String.fromCharCode(i) === 'a')
            return 'a';
        else if (String.fromCharCode(i) === 'e')
            return 'e';
        else if (String.fromCharCode(i) === 'i')
            return 'i';
        else if (String.fromCharCode(i) === 'o')
            return 'o';
        else if (String.fromCharCode(i) === 'u')
            return 'u';
        else 
            return i;
    })
}


//regex
function isVow(a){
    return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}