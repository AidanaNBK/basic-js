const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let temp = new Array;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev' && i > 0){
      temp.pop();
    } else if (arr[i] === '--discard-next' && i < arr.length - 1){
      i++;
    } else if (arr[i] === '--double-prev' && i > 0){
      temp.push(arr[i-1]);
    } else if (arr[i] === '--double-next' && i < arr.length - 1){
      temp.push(arr[i+1]);
    } else{
      temp.push(arr[i]);
    }
  }
  let res = new Array();
  for (let i in temp){
    if (temp[i] !== '--double-prev' && temp[i] !== '--double-next' && temp[i] !== '--discard-prev' && temp[i] !== '--discard-next'){
      res.push(temp[i])
    }
  }
  return res;
}

module.exports = {
  transform
};
