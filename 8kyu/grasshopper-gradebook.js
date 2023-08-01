// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//find average of 3 scores passed in, returns value of letter depending on scores
//P: arguments passed in will be > 0 and < 100, all positive values, only nums
//R: return a letter
//E: 
function gradeBook(score1, score2, score3) {
//P: //init variable to hold the average of scores passed in
    //check average with condition
    //return letter with cooresponding average
}

//test case
gradeBook(80,74,95) // 169 + 80 = 249 / 3 = 83 -- 'B' 
gradeBook(89,95,100) // 195 + 89 = 284 / 3 = 94.667 -- 'A'


function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3
  
    if (average >= 90) return 'A'
    if (average >= 80) return 'B'
    if (average >= 70) return 'C'
    if (average >= 60) return 'D'
    if (average >= 0) return 'F'   
};   


// use spread operator + reduce to make it more flexible?
function getGrade2(...scores) {
    let average = scores.reduce((acc, c) => acc + c / scores.length)

    if (average >= 90) return 'A'
    if (average >= 80) return 'B'
    if (average >= 70) return 'C'
    if (average >= 60) return 'D'
    if (average >= 0) return 'F' 
};