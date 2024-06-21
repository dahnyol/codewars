// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// parameter expects a string 
// return a string 
// fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
// (fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
// (fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
// function fireFight(s){
  // let arr = s.split(' ')
  // if.some(el => el === 'Fire') is true
  // arr.replace('Fire', with '~~') || arr[i] += '~~'
  // return arr.join(' ') to return string

const fireFight = s => s.replace(/Fire/g, `~~`);


function fireFight(s) {
    return s.replaceAll('Fire', '~~');
}


function fireFight(s){
    return s.split(' ').map((item) => item === 'Fire' ? item = '~~' : item).join(' ');
}


function fireFight(s){
    let res = []
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'Fire') {
            res.push('~~')
        } else {
            res.push(arr[i])
        }
    }
    return res.join(' ')
}