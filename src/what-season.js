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
  if (!date) return 'Unable to determine the time of year!';
  if ( Object.prototype.toString.call(date) !== "[object Date]" ) throw new Error('Invalid date!');
  //if( isNaN(Date.parse(date.toDateString()))) throw new Error('Invalid date!');
  if(Object.entries(date).length >= 1)  throw new Error('Invalid date!');
  const month = date.getMonth();
  if (month >=2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else if (month >= 8 && month < 11) {
    return  'fall';
  } else {
    return 'winter';
  }


}

module.exports = {
  getSeason
};
