// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//note: get array of peer test scores, compare the average of the peer test scores with your own score. T if better else F. .

//P array of numbers,
//R return T or F
//E
function betterAverageCheck(classmateScores, myScore){
//P 
    // compare average score to your score,
    // return T / F
}


function betterThanAverage(classPoints, yourPoints) {
    let classAvg = classPoints.reduce((acc, c) => acc + c / classPoints.length, 0);
    return yourPoints > classAvg;
}


function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
}