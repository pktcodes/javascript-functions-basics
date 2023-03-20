// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function newAccount(name, initialDeposit) {
  let balance = initialDeposit;

  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name}, you don't have enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

console.log(john);

john.showBalance();
john.deposit(200);
john.deposit(1000);

/* Private Variable */

// Trying to get john balance and set it, which is not possible. we don't have access to balance since we are not returning the balance which is a feature of "CLOSURE"

john.balance = 10000;
// console.log("John's Balance : ", john.balance);
// console.log("John: ", john);

john.withdraw(2000);

bob.showBalance();
