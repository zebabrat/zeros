module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  while (number) {
    number = (number / 5) | 0;
    zerosCount += number;
  }
  return zerosCount
}
