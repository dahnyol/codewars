
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

function otherAngle(angle1, angle2) {
    let angle3 = 180 - (angle1 + angle2);
    return angle3;
};

const otherAngle = (a, b) => 180 - a - b;