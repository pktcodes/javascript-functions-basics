// IIFE Immediately-Invoked Function Expression - older approach
// new approach - Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

const number1 = 10;
const number2 = 40;

/* Globe Scope Error - Same Variable Name */
// const number1 = 50;

function add() {
  console.log(`The sum of two number is: ${number1 + number2}`);
}
add();

// IIFE
(function () {
  const number1 = 20;
  const number2 = 30;
  console.log(`IIFE: The sum of two numbers is: ${number1 + number2}`);
})();

// IIFE - Arguments
(function (number1, number2) {
  console.log(
    `IIFE: Arguments: The sum of two numbers is: ${number1 + number2}`
  );
})(50, 50);

// IIFE - Return and Assign to a Variable
const result = (function (number1, number2) {
  console.log(`IIFE: Return: The sum of two numbers is: ${number1 + number2}`);
  return number1 + number2;
})(100, 1000);
console.log(`IIFE: Return: ${result}`);
