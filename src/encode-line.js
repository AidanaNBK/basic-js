const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let res = '';
  let start = str[0];
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== start){
      let count = j - i;
      if (count > 1){
        res += String(count) + start;
      } else {
        res += start;
      }
      start = str[j];
      i = j;
    }
    if (j === str.length - 1) {
      let count = j - i + 1;
      if (count > 1){
        res += String(count) + start;
      } else {
        res += start;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
