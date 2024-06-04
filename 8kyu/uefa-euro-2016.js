// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//P first parameter expects an array of two strings, the second parameter expects an array of two numbers
//R return a string saying 
//E uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//P function uefaEuro2016(teams, scores){
// let teamOneScore = [teams[0], scores[0]]
// let teamTwoScore = [teams[1], scores[1]]
// if (teamOneScore[1] > teamTwoScore[1]) 
// `teams[0] - teams[1], teams[0] won`
// if (teamOneScore[1] < teamTwoScore[1]) 
// `teams[0] - teams[1], teams[1] won`
// else
// `teams[0] - teams[1], teams played draw`

function uefaEuro2016(teams, scores){
    let teamOneScore = [teams[0], scores[0]]
    let teamTwoScore = [teams[1], scores[1]]
    
    if(teamOneScore[1] > teamTwoScore[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else
    if(teamOneScore[1] < teamTwoScore[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
}


function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}


const uefaEuro2016 = (teams, scores) => {
    const result = scores[0] === scores[1] ? 'teams played draw.' :
      scores[0] > scores[1] ? `${teams[0]} won!` : `${teams[1]} won!`
    
    return `At match ${teams[0]} - ${teams[1]}, ${result}`
}


function uefaEuro2016(teams, scores){
    let result;
    
    if (scores[0] > scores[1]) {
      result = teams[0] + ' won!';
    } else if (scores[0] == scores[1]) {
      result = 'teams played draw.';
    } else {
      result = teams[1] + ' won!';
    }
    
    return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}