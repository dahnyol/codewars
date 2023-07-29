// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

function updateLight(light) {
    switch(light) {
        case 'green': return 'yellow;'
        break;
        case 'yellow': return 'red';
        break;
        case 'red': return 'green';
        break;
    }
};

function updateLight(current) {
    const lightColor = ['green', 'yellow', 'red'];
    let nextLightColorIndex = (lightColor.indexOf(current) + 1) % lightColor.length; 
    return lightColor[nextLightColorIndex];
};

function updateLight(current) {
    if(current === 'green'){
      current = 'yellow';
    } else if
      (current ==='yellow'){
        current = 'red'
    } else if
      (current === 'red'){
        current = 'green'
    };
    return current;
};

function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
};

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current];