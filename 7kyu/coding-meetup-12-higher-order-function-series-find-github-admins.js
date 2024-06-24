// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];

// write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

function findAdmin(list, lang) {
    return list.filter((dev)=> dev.language === lang && dev.githubAdmin === 'yes')
}


const findAdmin = (list, lang) => {
    return list.filter(( { language, githubAdmin } ) => githubAdmin == 'yes' && language == lang)
}


function findAdmin(list, lang) {
    let gitHub = [];
    
    for (let i = 0; i < list.length; i++) {
      if (list[i].githubAdmin === 'yes' && list[i].language === lang) {
        gitHub.push(list[i])
      }
    } 
    return gitHub;
}