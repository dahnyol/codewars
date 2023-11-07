// Inspired by the development team at Vooza, write the function that

//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// note: function takes string. check if name is zach, if yes return 18 else no


function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? '18' : 0;
}


const howManyLightsabersDoYouOwn = name =>
// if name === 'Zach' evalutes to true, it is also 1
// true = 1, so (1) * 18 = 18 
// else if not 'Zach', evaluate falsy value
// false = 0, so (0) * 18 = 0;
  (name === `Zach`) * 18;