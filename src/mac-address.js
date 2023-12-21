const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let parts = n.split('-');
  if (parts.length !== 6){
    return false;
  }
  for (let i = 0; i < parts.length; i++) {
    let elem = parts[i].split('');
    if (elem.length != 2){
      return false;
    }
    let check1 = (elem[0] < '0' || elem[0] > '9') && (elem[0] < 'A' || elem[0] > 'F');
    let check2 = (elem[1] < '0' || elem[1] > '9') && (elem[1] < 'A' || elem[1] > 'F');
    if (check1 || check2){
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
