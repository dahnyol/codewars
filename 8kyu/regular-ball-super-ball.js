// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


// note: ball constructor creates property ballType and assigns it with ballType, if the balltype is empty it will be regular instead
//P constructor function takes input ballType string
//R no return, just property being set
//E
let Ball = function(ballType){
//P this.ballType = ballType
// if balltype is empty, default to regular
}

// class Ball {
//     constructor(name){
//       this.name = name;
//     }
//     get ballType(){
//       if (!this.name){
//         return "regular"
//       }
//       return this.name
//     }
//   }


const Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};