module.exports = function getZerosCount(number, base) {
  // your implementation
  let zeroCounter = 3e9;
  for (let i = 2; i <= base; i++) {

    if (base % i == 0) {
      let degreeOfEntry = 0;

      while (base % i == 0) {
        degreeOfEntry++;
        base /=i;
      }

      let numberOfEntry = 0;
      let variable2 = number;
      let deg = i;
      while (variable2 / deg >= 1) {
        numberOfEntry += Math.floor(variable2 / deg);
        deg*= i;
      }

      if ( zeroCounter > Math.floor(numberOfEntry / degreeOfEntry)) {
        zeroCounter = Math.floor(numberOfEntry / degreeOfEntry);
      }
    }

  }
  return zeroCounter;
}
