const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  let temp = [];
  for (let i in arr) {
    if (arr[i] !== -1) {
      temp.push(arr[i]);
    }
  }
  temp.sort(function(a, b) {
    return a - b;
  });
  console.log("temp: ", temp);
  let j = 0;
  for (let i in arr) {
    if (arr[i] !== -1) {
      arr[i] = temp[j];
      j++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
