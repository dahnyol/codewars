// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

//notes: get name and owner as arg, give personal greeting 
//P get 2 args, a name, and owner. string only, no nums
//R return hello boss or hello guest as a message  
//E
function personalMessage(name, owner) {
//P check name if name matches owners
// return hello boss if yes, hello guest if no
}

//test case
personalMessage('john', 'bob') // hello guest
personalMessage('bob', 'bob') /// hello boss

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';