// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.


// notes: function has 3 parameters, length width and height. use formula to calc volume
//P L, W, H , positive numbers 
//R return one number, after the calc of lwh
//E
function cuboidVolume(length, width, height){
//P // L X W X H = volume
    // return volume
}


class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
}


var Kata = (() => {
    this.getVolumeOfCuboid = (l, w, h) => l * w * h;
    return this;
})();