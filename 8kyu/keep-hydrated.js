// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// notes: function takes input of hours and return the amount of litres to drink. 
//P input + num
//R return one num for litres 
//E
function hydrate(timeRan){
//P // check timeRan input and check condition
    // condition every 1 hr .5 litre or 2 hr run/1 litre
    // return litres
}


function litres(time){
    return Math.floor(time/2);
}


function litres(time){
    let litre = Math.floor(time * .5);
    return litre;
}