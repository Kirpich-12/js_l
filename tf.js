function getCardId(value) {
  const mast = ['♣', '♦', '♥', '♠'];
  const znach = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const znach2 = value.slice(0, -1);
  const mast1 = value.slice(-1);
  return mast.indexOf(mast1) * znach.length + znach.indexOf(znach2);
}
console.log(getCardId('Q♠'))