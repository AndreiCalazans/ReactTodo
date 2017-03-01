// function add (a , b) {
//   return a + b ;
// }
//
// console.log(add(3 , 1));
//
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
//
// var groupB = ['Andrei'];
//
// var final = [...groupA , ...groupB];
// console.log(final);


var person = ['andrei', 25];
var personTwo = ['jen', 29];
//Hi andrei , you are 25

function greet(name, age){
  console.log('Hi ' + name + ' , you are ' + age);
};
greet(...person);


var name = ['Mike', 'Ben'];

var final = ['Andrei', ...name];

final.forEach( (name) => {
  return console.log('Hi ' + name);
});
