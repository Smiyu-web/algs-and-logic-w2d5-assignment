// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {
  let nums = [];
  let primes = [];

  for (let i = 2; i < n; i++) {
      nums.push(i)
  }

  let sqrt = Math.sqrt(n);
  while(nums[0] <= sqrt){
      let prime = nums.shift()
      primes.push(prime);
      nums = nums.filter(function(num){
          return num%prime != 0
      })
  }
  return primes.concat(nums)
}


console.log(primeGenerator(50));
console.log(primeGenerator(100));
