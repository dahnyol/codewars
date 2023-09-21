// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.


// notes: function takes num input, it will be 0-9, return the number in given in words/string use switch if possible
//P 1 parameter, will take a positive number only between 0 - 9
//R return a string , 0 returns 'Zero'
//E
function numToWord(num){
//P // switch statement , 1 -> 'One' , 2 -> 'Two
}


function switchItUp(number){
    switch(number){
        case 0 : return 'Zero'
        break; // returning value, don't need break;
        case 1: return 'One'
        break;
        case 2: return 'Two'
        break;
        case 3: return 'Three'
        break;
        case 4: return 'Four'
        break;
        case 5: return 'Five'
        break;
        case 6: return 'Six'
        break;
        case 7: return 'Seven'
        break;
        case 8: return 'Eight'
        break;
        case 9: return 'Nine'
        break;
    }
}


switchItUp = number => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number]