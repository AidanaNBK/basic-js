const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = [];
  while (n > 0){
    digits.push(n%10);
    n = Math.floor(n/10);
  }
  let max = 0;
  for (let i = 0; i < digits.length; i++){
    let temp = [...digits];
    temp.splice(i, 1);
    const tempMax = combineBack(temp);
    if (tempMax > max) {
      max = tempMax;
    }
  }
  return max;
}

function combineBack(digits){
  let res = 0;
  for (let i = digits.length - 1; i >= 0; i--){
    res = res*10 + digits[i];
  }
  return res;
}

module.exports = {
  deleteDigit
};
