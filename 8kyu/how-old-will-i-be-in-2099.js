// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

// function expects two number data types as arg
// return a string with a number variable 
// (calculateAge(2000, 2090),"You are 90 years old.");
// (calculateAge(2000, 1990),"You will be born in 10 years.");
// (calculateAge(3400, 3400),"You were born this very year!"); 
// (calculateAge(900, 2900),"You are 2000 years old.");
// function calculateAge(yearOfBirth, yearToCount) {
// let yearDifference = yearOfBirth - yearToCount
// let years = 'years'
// if (yearDifference === 1 || yearDifference === -1)
// years = 'year'
// if (yearDifference > 0)
// return 'You are {yearDifference} {year} old.'
// if (yearDifference < 0)
// return 'You will be born in {yearDifference} {year}.'
// else 
// return You were born this very year!

function calculateAge(yearOfBirth, yearToCount){
    let yearDifference = yearOfBirth - yearToCount
    let years = 'years'
    let age = Math.abs(yearDifference)

    if (yearDifference === 1 || yearDifference === -1)
    years = 'year'

    if (Math.sign(yearDifference) === -1)
        return `You are ${age} ${years} old.`
    if (Math.sign(yearDifference) === 1)
        return `You will be born in ${age} ${years}.`
    else 
        return `You were born this very year!`
}


const calculateAge=(b,c)=>{
    r = c-b;
    switch(true) {
      case (r>1):    return "You are " + r + " years old."; break;
      case (r===1):  return "You are 1 year old."; break;
      case (r===0):  return "You were born this very year!"; break;
      case (r===-1): return "You will be born in 1 year."; break;
      case (r<-1):   return "You will be born in " + (-r) + " years."; break;
    }
  }


const calculateAge = (old, news) => {
  if ( old === news ) {
    return "You were born this very year!" 
  }else if ( news > old ) {
    return news - old === 1 ? "You are 1 year old." : `You are ${news - old} years old.`
  }else{
    return old - news === 1 ? "You will be born in 1 year." : `You will be born in ${old - news} years.`
  } 
}