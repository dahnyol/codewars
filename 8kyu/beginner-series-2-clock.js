// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

//notes: clock shows h m s after 00:00, return time since midnight in miliseconds
//P 3 num, h , m, s. postiive numbers
//R return milliseconds
//E
function sinceMidnight(h, m, s) {
//P //init millisecond variable
    //convert input s into millisecond, 1000 * s
    //convert input m into millisecond, 60,000 * m
    //convert input h into millisecond, 3,600,000 * h 
    //return milliseconds
}

function past(h, m, s){
    let milliseconds = 0;
    milliseconds += 1000 * s;
    milliseconds += 60000 * m;
    milliseconds += 3600000 * h;
    return milliseconds;
}


const past(h, m, s) {
    let hours = h * 60 * 60 * 1000;
    let minutes = m * 60 * 1000;
    let seconds = s * 1000;
    return hours + minutes + seconds;
}


const past(h, m ,s){
    return 1000 * (3600 * h + 60 * m + s)
}


function past(h, m, s){
    return ((3600*h) + (60*m) + s) * 1000;
}