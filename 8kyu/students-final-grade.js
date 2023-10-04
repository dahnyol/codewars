// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:
//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//     90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//     75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//     0, in other cases

// Examples(Inputs-->Output):
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 85, 5 --> 90
// 55, 3 --> 75
// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.


// NOTES; function finalgrade(exam, project) , inputs will be 0 - 100 for exam, projects > 0. check conditions exam/projects. default 0
//P exam number 0-100, project number 0 or greater
//R return 100, 90, 75 or 0 depending on condition
//E
function finalGrade(examGrade, numOfProjects){
//P // set conditions to check examGrade and projects. 
    // 100 for > 90, > 10,
    // 90 for > 75, > 5,
    // 75 for > 50, > 1,
    // 0
}


function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
        return 100;
    } else if(exam > 75 && projects > 4){
        return 90;
    } else if(exam > 50 && projects > 1){
        return 75;
    } else {
        return 0;
    }
}


const finalGrade = (exam, projects) => {
    return (
      exam > 90 || projects > 10 ? 100 :
      exam > 75 && projects >= 5 ? 90 :
      exam > 50 && projects >= 2 ? 75 : 0
    )
}