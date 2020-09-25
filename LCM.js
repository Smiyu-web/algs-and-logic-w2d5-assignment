// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  function gcd(a, b) {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a%b);
    }
  }

  let d = gcd(a, b);
  return a / d * b;
}

console.log(lcm(3, 9));
console.log(lcm(3, 4));
console.log(lcm(10, 30));
console.log(lcm(12, 36));
console.log(lcm(3, 7));

