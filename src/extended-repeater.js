const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = str;
  let separator = '+';
  let addition = '';
  let addSep = '';
  let addRep = 0;
  if (options.separator){
    separator = options.separator;
  }
  if (options.addition !== undefined){
    addition = options.addition;
  }
  if (options.additionRepeatTimes){
    addRep = options.additionRepeatTimes;
  }
  if (options.additionSeparator){
    addSep = options.additionSeparator;
  }
  if (addRep > 0 && addSep === ''){
    addSep = '|';
  }
  let addRes = addition;
  for (let i = 1; i < addRep; i++){
    addRes += addSep + addition;
  }
  for (let i = 1; i < options.repeatTimes; i++){
      res += addRes + separator + str;
  }
  res += addRes;
  return res;
}

module.exports = {
  repeater
};
