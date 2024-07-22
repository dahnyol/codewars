// Remove all exclamation marks from the end of sentence.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove (string) {  
    string = string.split("")
    
    for(let i = 0; i <= string.length; i++){
        if (string[string.length-1] == "!")
            string.pop()
        }  
    return string.join("")
}


function remove(s){
    
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
}

function remove(s){
    return s.charAt(s.length - 1) === '!' ? remove(s.slice(0, s.length - 1)) : s;  
}


function remove(s){
    for (let i = 0; s.endsWith("!"); i++) {
        s.endsWith("!") ? s = s.slice(0 , -1) : s;
    }	
    return s;
}


//regex 
function remove (string) {
    return string.replace(/!+$/, '')
}