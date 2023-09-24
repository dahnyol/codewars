// Messi goals function
// Messi is a soccer player with goals in three leagues:
//     LaLiga
//     Copa del Rey
//     Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17


// note: function takes number input, add the numbers together and return it


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


const goals = (...a) => a.reduce((acc, c) => acc + c, 0);