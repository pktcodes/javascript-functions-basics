// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized

// Cannot access "const", "let" before intitialization, since they are not hoisted
// console.log(firstName);

// Functions are hoisted i.e. JavaScript while reading the code once it reaches the function declarartion, it places before the declartion before invoke and execute it.
display();

// the declared function has dependency on const variable.
// moreComplex();

// So just to be safe side declaration and access them.

// variables declarations are hoisted but not values i.e it does give error const, let but gives undefined
console.log(random);

const firstName = "praveen";
let lastName = "kumar";
var random = "illinois";

console.log(firstName);

function display() {
  console.log("Hello World");
}

function moreComplex() {
  console.log(firstName);
}
