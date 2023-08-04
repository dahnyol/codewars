// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//given 2 args, L and W
//if square then area, if rectangle then perimeter
//square have even L and W
//P: takes numbers, whole nums, +, 
//R: return a number, area or perimeter
//E:
function areaOrPerimeter(input1, input2) {
//P    //check if input1 and input2 are even
    //if yes then give area
    //else give perimeter
    //return a number (perimeter/area)
}
//testcase 
areaOrPerimeter(4, 4) // 16
areaOrPerimeter(16, 4) // 

const areaOrPerimeter = (input1, input2) => {
    return input1 === input2 ? input1 * input2 : 2 *  (input1 + input2); 
}

const areaOrPerimeter = function(l , w) {
    if( l === w){
      return l*w;
    }else{
      return 2*l+2*w
    }
};

const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
};