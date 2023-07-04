// If you can't sleep, just count sheep!!
// Task: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = (num) => {
    let speak = '';
    
    for(let i = 1; i <= num; i++){
        speak +=`${i} sheep...`
    }
    return speak;
}

// spread syntax with map method
let countSheep = function (n){
    return [...Array(n)].map((_,i) => i + 1 + ' sheep...').join``
}