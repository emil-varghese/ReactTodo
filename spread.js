function add (a,b) {
  return a + b;
}

console.log(add(3,1));
var toAdd = [9,5];
console.log(add(...toAdd));

var groupA = ['Em','Va'];
var final = [4,...groupA];
console.log(final);

function greet(name,age) {
  return 'Hi '+ name +'. You are '+ age;
}

var person = ['Andrew', 29];
var person1 = ['Jen', 22];
console.log(greet(...person));
console.log(greet(...person1));

var names = ['Mike', 'Ben'];
var final = ['Andres'];
var final1 = [...final,...names];

final1.forEach(function(name){
  console.log('Hi' + name);
})
