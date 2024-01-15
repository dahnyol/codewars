// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


function tripleTrouble (str1, str2, str3) {
    // init new string to return for result 
    // loop through the length first given str1 
    // concat the first element of first given str
    // concat the second element of the second given str
    // concat the third element of the third given str
    // return str
}


function tripleTrouble(one, two, three){
    let resultStr = ''

    for(let i = 0; i < one.length; i++){
        resultStr += one[i];
        resultStr += two[i];
        resultStr += three[i];
    }
    return resultStr;
}


function tripleTrouble(one, two, three){
    let result = [];
    
    for(let i = 0; i < one.length; i++){
        result.push(one[i])
        result.push(two[i])
        result.push(three[i])
    }
    return result.join('')
}


function tripleTrouble(one, two, three) {
    let result = "";
    for (let i = 0; i < one.length; i++) {
      result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}