function sortDigitNamesByNumericOrder(arr) {
  const order = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  return arr.slice().sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

console.log(sortDigitNamesByNumericOrder([ 'nine','one' ]))