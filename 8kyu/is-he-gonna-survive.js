// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

//notes: need 2 bullet to kill dragon, hero will get unknown number of bullets, assume he grabs bullets and moves to kill dragons, return the check if has enough bullets per dragon
//P will get bullets, unknown number
//R return true or false based on condition
//E
function survive(bullets, dragons){
//P  number of bullets is greater than the amount needed to kill dragon which is 2 bullets each
}

survive(10,5) // true
survive(8,5) // false 

const hero = (bullets,dragons) => bullets >= dragons * 2;

function hero(bullets, dragons){
    return bullets/2 >= dragons;
}

const hero = (bullets, dragons) => bullets/dragons >= 2;