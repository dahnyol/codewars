// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

//P two array inputs, same length and will not be empty
//R return a single integer that is the score
//E ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

//P function(answerKey, studentKey)
    // init score = 0
    // loop through the array of answerKey
    // if answerKey[i] === studentKey[i] 
    // score +4
    // if empty string answer 
    // score += 0
    // else everything else is wrong 
    // score -= 1

    //lowest score 0, if score < 0 return 0

function checkExam(array1, array2){
    let score = 0;

    for(let i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            score += 4
        } else 
        if(array2[i] === ''){
            score += 0
        } else {
            score -= 1
        }
    }

    if (score < 0) {
        score = 0
    }
    return score;
}

const checkExam = (array1, array2) => {
    let result = array2.reduce(
      (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
}