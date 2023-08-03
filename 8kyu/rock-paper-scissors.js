// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//rock paper scissors, 2 inputs given 1 output 
//p: input1 input2, will get rock paper or scissors lowercase, no num,
//R: return player1 player2 or draw
//E:
function rps(player1, player2) {
//P compare player 1 to player 2
// check condition and return winner
// else return draw
}

//test case
rps('rock', 'paper') // player 2 wins
rps('rock', 'rock') // draw
rps('scissors', 'paper') // player 1 wins

function rps(player1, player2) {
    if (player1 == 'scissors' && player2 == 'paper' || player1 == 'rock' && player2 == 'scissors' || 
    player1 == 'paper' && player2 == 'rock') {
        return 'Player 1 won!';
    }
    else if (player2 == 'scissors' && player1 == 'paper' || player2 == 'rock' && player1 == 'scissors' || 
    player2 == 'paper' && player1 == 'rock') {
        return 'Player 2 won!';
    } else {
        return 'Draw!';
    }   
};


//old solution
const rps = (p1, p2) => {
    if(p1 === "rock" && p2 === "paper"){
      return 'Player 2 won!'
    } else if(p1 === "paper" && p2 === "rock"){
      return 'Player 1 won!'
    } else if(p1 === "scissors" && p2 === "paper"){
      return `Player 1 won!`
    } else if(p1 === 'rock' && p2 === 'scissors'){
      return `Player 1 won!`
    } else if(p2 === 'rock' && p1 === 'paper'){
      return `Player 1 won!`
    } else if(p2 === 'paper' && p1 === 'rock'){
      return `Player 2 won!`
    } else if(p2 === 'scissors' && p1 === 'paper'){
      return `Player 2 won!`
    } else if(p2 === 'rock' && p1 === 'scissors'){
      return `Player 2 won!`
    } else {
      return `Draw!`}
};


// object with a winning properties and losing values
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";

    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
};