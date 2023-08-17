// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//notes: must get average, will get array of scores. average scores of array and round down to nearest int. no empty arrays
//P: will get array of numbers, will be > 0
//R return math.floor/round down of average scores in array
//E
function average(scores) {
//P loop through scores array and add them together then divide by scores.length; 
// return rounded down average
}

function getAverage(scores) {
    return Math.floor(scores.reduce((acc, c) => acc + c / scores.length, 0));
}


function getAverage(marks) {
    let average = marks.reduce((acc, c) => acc + c / marks.length, 0);
    return Math.floor(average)
}