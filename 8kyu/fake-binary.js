// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(string) {
    let result = [];
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] >= 5){
            result.push('1')
        } else
        if(string[i] < 5){
            result.push('0')
        }
    }
    return result.join('');
}

// map method returns an array
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// replace with regex
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}