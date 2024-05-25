// // You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// // Your task is to return the number of JavaScript developers coming from Europe.

// // For example, given the following list:

// // var list1 = [
// //   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// //   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// //   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// //   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// // ];

// // your function should return number 1.

// // If, there are no JavaScript developers from Europe then your function should return 0.

// // Notes:

// //     The format of the strings will always be Europe and JavaScript.
// //     All data will always be valid and uniform as in the example above.

//P parameter takes an array with objects as elements
//R return 1 if Europe 0 if no one from Europe
//E countDevelopers(list2), 0, "Lukas is not a JS devolper");
// countDevelopers(list1), 1, "Noah is the only JavaScript developer from Europe");
//P loop through array 
// check if array.includes(property with key === Europe)
// return 1 or 0

function countDevelopers(list){
    let count = 0;
    
    list.forEach((el) => {
      if(el.continent === 'Europe' && 
      el.language === 'JavaScript'){
        count++;
      }
    });
    return count;
}

function countDevelopers(list) {
    return list.reduce((count, dev) => 
      (dev.continent === 'Europe' && 
      dev.language === 'JavaScript') 
      ? count + 1 : count, 0);
}
  
// use .length to count instead of adding to count
function countDevelopers(list) {
    return list
      .filter(dev => dev.language === "JavaScript")
      .filter(dev => dev.continent === "Europe")
      .length
}

function countDevelopers(list) {
    let count = 0;

    for (let i = 0; i < list.length; i++)  {
      if (list[i].continent === "Europe" && list[i].language === "JavaScript")  {
      count++;
    }
}
  return count;
}

function countDevelopers(list) {
    const result = list.reduce((acc, {continent, language}) => {
      if(continent === 'Europe' && language === 'JavaScript'){
        acc += 1
      }
      return acc
    }, 0)
    return result
}