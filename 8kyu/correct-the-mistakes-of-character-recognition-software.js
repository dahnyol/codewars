// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1
// The test cases contain numbers only by mistake.


// notes: function that will take string and look for following letters/conditions to correct. change 5 to S, 0 to O, 1 to I.
//P takes in string parameter
//R return a string with corrected text/changes
//E
function change501(string){
//P // init new variable convert and store array of string
    // iterate over stringarray
    // push each stringarray[i] to new variable
    // check if stringarray[i] === 5, if yes change to S
    // if stringarray[i] === 0, change to O
    // if stringarray[i] === 1, change to I
    // return corrected stringarray.
    // can use map*
}


function correct(string){
    return string.replace(5, 'S')
}


function correct(string){
    return string.split('')
                 .map((letter) => letter === '5' ? letter = 'S' : letter === '0' ? letter = 'O' : letter === '1' ? letter = 'I' : letter)
                 .join('');
}


function correct(string){
    let stringArray = [];

    for(let i = 0; i < string.length; i++){
        
        if (string[i] === '5') {
            stringArray.push('S')
        } else
        if (string[i] === '0') {
            stringArray.push('O')
        } else
        if (string[i] === '1') {
            stringArray.push('I')
        } else {
        stringArray.push(string[i])
        }
    }
    return stringArray.join('');
}


function correct(string){
    let newString = '';

    for(let i = 0; i < string.length; i++){
        if (string[i] === '5'){
            newString += 'S';
        } else if (string[i] === '0'){
            newString += 'O';
        } else if (string[i] === '1'){
            newString += 'I'
        } else {
            newString += string[i];
        }
    }
    return newString;
}


function correct(string){
    let newString = '';

    for(const char of string){
        if (char === '5'){
            newString += 'S';
        } else if (char === '0'){
            newString += 'O';
        } else if (char === '1'){
            newString += 'I'
        } else {
            newString += char;
        }
    }
    return newString;
}


const corrections = {
	'5': 'S',
	'0': 'O',
    '1': 'I',
};


function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}


const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);