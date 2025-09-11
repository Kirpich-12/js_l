function roundToPowerOfTen(num, pow) {
  return num - (num % (10 * pow));
}

console.log(roundToPowerOfTen(1234, 2))