// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//P parameter is a string with characters, mixed upper/lower 
//R return the input string with the letters joined by - and capitalized, followed by the same letter depending on its place corresponding to the letter's index + 1.
// E Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"); 

// return a string with the character strings repeated by its index + 1, first letter capital, else lowercase, joined by -
//P can map and join

function accum(s) {
    let result = ''

    let array = s.toLowerCase()
    .split('')

    for(let i = 0; i < array.length; i++){
        // on each loop of the array, add capitalized element to result string
        result += array[i].toUpperCase()
        // on each loop, check to run second loop, which will run on any index greater than 0 (first element in the array)
        // second loop will run on every other element in the array
        // count down from the array length to 0
        // second loop will print element 2 times when on array index 1... 3 times on array index 2... etc
        for(let j = i; j > 0; j--){
            // add the current element to the result 
            result += array[i]
        }
    
        if (i < array.length - 1) {
        result += '-'
        }
    }
    return result
}

const accum = s => 
    s.toLowerCase().split('')
    .map((el, idx) => el.toUpperCase() + el.repeat(idx)).join('-')