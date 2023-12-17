const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const s1Char = s1.split('');
  const s2Char = s2.split('');
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s1Char.length; i++){
    map1[s1Char[i]] = (map1[s1Char[i]] || 0) + 1;
  }
  for (let i = 0; i < s2Char.length; i++){
    map2[s2Char[i]] = (map2[s2Char[i]] || 0) + 1;
  }
  for (let key in map1){
    if (key in map2){
      res += Math.min(map1[key], map2[key]);
    } else {
      continue;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
