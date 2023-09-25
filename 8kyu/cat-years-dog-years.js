// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
//     humanYears >= 1
//     humanYears are whole numbers only
// Cat Years
//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that
// Dog Years
//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that


// note: function that takes humanYears as argument, condition will convert the humanYears to catYears and dogYears. return the years in an array [humanYears, catYears, dogYears]
//P number input, positive, whole numbers, > 0
//R return an array with [humanYears, catYears, dogYears]
//E
function convertYears(humanYears){
//P // humanYears === 1, +15 to catYears and dogYears
    // if humanYears === 2, 15+9 to catYears and dogYears
    // if humanYears >= 3, catYears = (15 + 9) + 4 * (humanYears - 2); dogYears = (15 + 9) + 5 * (humanYears - 2);
    // return [humaNYears, catYears, dogYears]
}


const humanYearsCatYearsDogYears = function(humanYears){
    let catYears = 0;
    let dogYears = 0;

    if(humanYears == 1) {
        catYears = 15;
        dogYears = 15;
    } else if(humanYears == 2){
        catYears = 24;
        dogYears = 24;
    } else if(humanYears > 2){
        catYears = 24 + 4 * (humanYears - 2);
        dogYears = 24 + 5 * (humanYears - 2);
    }

    return [humanYears, catYears, dogYears]
}


const humanYearsCatYearsDogYears = function(humanYears){
    if (humanYears == 1) return [humanYears, 15, 15]
    if (humanYears == 2) return [humanYears, 24, 24]
    return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}


function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }    
}