// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

//P takes a integer number
//R return integer numbers as a string with dashes inserted 
//E (insertDash(454793),'4547-9-3');
// (insertDash(123456),'123456');
//(insertDash(1003567),'1003-567');
//P function insertDash(num) {
   // result var with empty array
   // convert integer number array into integer string array
   // loop through string array
   // if its not the first index element && str[i] is odd && str[i -1] is odd (the previous element)
   // concat - into the result
   // add the str[i] to result
   // return result

function insertDash(num) {
    let str = num + ''
    let result = ''

    for(let i = 0; i < str.length; i++) {
        if(i > 0 && str[i] % 2 !== 0 && str[i - 1] % 2 !== 0) {
            result += '-'
        } 
            result += str[i]
        }
    return result
}

function insertDash(num) {
    num = num.toString().split('')

    for(let i = 0; i < num.length; i++){
        if (num[i]%2 > 0 && num[i +1]%2 > 0){
            num[i] = num[i] + '-'
        }
    }
    return num.join('') 
}

//regex
function insertDash(num) {
    return num.toString().replace(/[13579](?=13579])/g, '$&-');
}