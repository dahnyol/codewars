// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//notes: takes in array of words, puts into sentence/return
//P: takes array
//R: only words, add spaces between word but not at beginning or end
//E:
function sentenceSmash(array){
//P    //change array into string
    //return new string/sentence
}

//test case
sentenceSmash(['hello', 'i', 'am', 'ready']) // 'hello i am ready'

function smash (words) {
    return words.join(' ');
};


//for loop
function smash (words) {
    let smashed = '';
    
    for(let i = 0; i < words.length; i++) {
        smashed += words[i];
        if(i != words.length - 1) {
        //if its not the last element in array, add a space after
            smashed += ' '; 
        }
    }
    return smashed;
};