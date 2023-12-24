const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //console.log(date);
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();
  //console.log(month);
  if (month === 0 || month === 1 || month === 11) {
    return "winter";
  }
  if (month === 2 || month === 3 || month === 4) {
    return "spring";
  }
  if (month === 5 || month === 6 || month === 7) {
    return "summer";
  }
  if (month === 8 || month === 9 || month === 10) {
    return "autumn";
  }
  return "winter";
}


/*
  let d, err = new Date(date);
  if (err) {
    throw new Error("Invalid date!");
  }
  let month = d.getMonth();
  if (month === "01" || month === "02" || month === "03") {
    return "winter";
  }
  if (month === "04" || month === "05" || month === "06") {
    return "spring";
  }
  if (month === "07" || month === "08" || month === "09") {
    return "summer";
  }
  if (month === "10" || month === "11" || month === "12") {
    return "autumn";
  }
  return "winter";
*/
module.exports = {
  getSeason
};
