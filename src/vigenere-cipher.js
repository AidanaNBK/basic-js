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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'A' && text[i] <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const charCode = text[i].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedCharCode = (charCode + shift) % 26;
        result += String.fromCharCode(encryptedCharCode + 'A'.charCodeAt(0));
        keyIndex++;
      } else {
        result += text[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'A' && text[i] <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const charCode = text[i].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedCharCode = (charCode - shift + 26) % 26;
        result += String.fromCharCode(decryptedCharCode + 'A'.charCodeAt(0));
        keyIndex++;
      } else {
        result += text[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
