// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// function adds Hello, in front of the input string and ! at the end of the input string. Return the input string with the case sensitive first letter Capitalized followed by lowercase.


function hello(name) {
    if(name === '' || !name) {
        //console.log('Hello, World!')
      return 'Hello, World!'
    } else {
        //console.log(`Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`)
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    }
}


const hello = name =>
  `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`;


const hello = (name) => {
    if (!name) return 'Hello, World!';

    return 'Hello, ' + name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()+'!';
};