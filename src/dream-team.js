const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return "";
  }
  let letter = [];
  for (let i in members) {
    //console.log(members[i])
    if (typeof members[i] === "string") {
      //console.log("string:", members[i])
      members[i] = members[i].trim();
      letter.push(members[i][0]);
    }
  }
  //console.log("letters: ", letter)
  for (let i in letter) {
    letter[i] = letter[i].toUpperCase();
  }
  letter.sort();
  let res = "";
  for (let i in letter) {
    res += letter[i];
  }
  return res;
}

module.exports = {
  createDreamTeam
};
