// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  if (num === 2) {
    return true
  } else {
    for ( let i = 2; i < num; i++ ) {
      if (num % i === 0) {
        return false
      }
      if (i + 1 === num) {
        return true
      }
    }
  }
}

console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(16));
console.log(isPrime(21));