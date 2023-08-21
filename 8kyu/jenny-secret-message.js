// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

//note: function that returns greeting for a user parameter. fix mistake/debug
//P check parameter, takes in name string ok
//R check returns, if concat is correct
//E fix/debug below
function greet(name){
     return "Hello, " + name + "!";
     if(name === "Johnny")
       return "Hello, my love!";
   }
//P check conditions //should check for johnny or not johnny first before any returns

function greet(name){
    if(name === "Johnny")
    return "Hello, my love!";
    else
    return "Hello, " + name + "!";
};


const greet = name => name !== 'Johnny' ? `Hello, ${name}!` : "Hello, my love!";


function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}