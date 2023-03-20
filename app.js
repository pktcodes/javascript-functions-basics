// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret variable";
  console.log("Outer: Hello World, this is a secret");
  function inner() {
    console.log(`Inner: Hello World, this is a ${privateVar}`);
  }
  return inner;
  inner();
}

outer()();

const value = outer();
console.log("=======The value of Outer====== ", value);
value();
