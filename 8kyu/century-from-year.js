// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//note: given a year input num and return number of the century it is 
//P given one number, +
//R return a number
//E
function century(year){
//P // check year with condition
    // given year, if 
    // return num of century, 15, 16, 17, 18 etc..
}


function century(year) {
    return Math.ceil(year/100);
}


function century(year){
    let result = 0;
    // year % 100 === 0 means 'every 100 LOOPS, add 1 to the century variable'
    for(let i = 0; i < year ; i++){
      if(i % 100 === 0){
        result ++;
        }
    }
    return result;
}


function century(year) {
    return (year + 99) / 100 | 0;
}