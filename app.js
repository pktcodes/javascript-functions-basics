// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function newAccount(name, initialDeposit) {
  let balance = initialDeposit;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 500)();

const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

john();
bob();
