// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//P parameter takes in a string. characters in string may contain numbers
//R returns the numbers found in the string
//E Test.assertSimilar(getNumberFromString("1"), 1);
// Test.assertSimilar(getNumberFromString("123"), 123);
// Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
//P function will take in a string, loop through the string and check each char if it is a number type, add number types to result to return

function getNumberFromString(s) {
    return Number(
        s.split('')
        .filter(a => a <= '9' && a >= '0')
        .join('')
    )
}

function getNumberFromString(s) {
    let digitChar = "";
    for (let i = 0; i < s.length; i++) {
      if (+s[i] || s[i] === "0") 
      digitChar += s[i];
    }
    return +digitChar;
}

function getNumberFromString(s) {
    // use includes method
    let result = ''
    let digits = '0123456789'
    for (let i = 0; i < s.length; i++) {
      if (digits.includes(s[i])) {
        result += s[i]
      }
    }
    return Number(result)
}

// regex
function getNumberFromString(s){
    //regex \D targets all non-digit chars, g is global so it applies throughout the string
    //essentially replaces each non-digit with an empty string, effectively removing it
    let nums = s.replace(/\D/g, '');
    return +nums
}