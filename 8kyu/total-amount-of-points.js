// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

//note function takes string "x:y"
// 10 strings of "x:y" 
// each loop x and y are compared and add point point
// return number of points num on x
//P: takes array of strings representing match games, 10
//R: return a number of points x wins
//E:
function points(array){
//P //loop over array
    //init var to hold score result to return
    //check each element, within that element compare the index of element[0] and element[2] (element[1] is :)
    //set conditions to add to score
    //return the score
}

//test case
points(['3:1', '2:2', '0:1', '3:1', '2:2', '0:1', '5:2', '3:1', '2:2', '0:1']) // 3+1+0+3+1+0+3+3+1+0 = 15

//for loop
function points(games) {
    let score = 0;

    for(let i = 0; i < games.length; i++) {
        if(games[i][0] > games[i][2]) {
            score += 3;
        } else if(games[i][0] == games[i][2]){
            score += 1;
        }
    }
    return score;
}


//reduce
const points = games => {
   return games.reduce((acc, c) => c[0] > c[2] ? acc += 3 : c[0] == c[2] ? acc += 1 : acc += 0, 0)
}