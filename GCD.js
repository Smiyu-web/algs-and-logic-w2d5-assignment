// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {
  if (b === 0) {
    return a
  } else {
  return gcd(b, a % b)
  }
}


console.log(gcd(36, 12));
console.log(gcd(48, 12));
console.log(gcd(25, 10));
