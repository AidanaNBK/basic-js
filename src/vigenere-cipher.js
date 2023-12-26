const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    let res = "";
    let index = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        (text[i] >= "A" && text[i] <= "Z") ||
        (text[i] >= "a" && text[i] <= "z")
      ) {
        let shift = this.shiftValue(key[index]);
        let encrypted = this.encryptVal(text[i], shift);
        res += encrypted;
        index = (index + 1) % key.length;
      } else {
        res += text[i];
      }
    }
    return res;
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
  }
  shiftValue(elem) {
    let base =
      elem.toUpperCase() === elem ? "A".charCodeAt(0) : "a".charCodeAt(0);
    return elem.charCodeAt(0) - base;
  }
  encryptVal(elem, shift) {
    let base =
      elem.toUpperCase() === elem ? "A".charCodeAt(0) : "a".charCodeAt(0);
    let encrypted = ((elem.charCodeAt(0) - base + shift + 26) % 26) + base;
    return String.fromCharCode(encrypted);
  }
}

module.exports = {
  VigenereCipheringMachine
};
