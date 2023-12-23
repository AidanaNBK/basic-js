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
  let res = new Array;
  for (let i = arr.length-1; i >=0; i--) {
    if (arr[i] === '--discard-prev' && res.length > 0){
      res.pop();
    }else if (arr[i] === '--discard-next' && i < arr.length - 1){
      i--
    }else if (arr[i] === '--double-prev' && res.length > 0){
      res.push(res[res.length - 1]);
    }else if (arr[i] === '--double-next' && i < arr.length - 1){
      res.push(arr[i+1]);
    }else{
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
