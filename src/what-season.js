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
  const maxDaysNumber = {'0':'31', '1':'28', '2':'31', '3':'30', '4':'31', '5':'30', '6':'31', '7':'31', '8':'30', '9':'31', '10':'30', '11':'31'}
  const day = date.getDate()
  const month = date.getMonth()
  if ((date.valueOf()).length<12){
    return 'Unable to determine the time of year!'
  }
  if (!Number.isNaN(date.valueOf())&&maxDaysNumber[month]>=day){
  if (month===11||month===0||month===1) return 'winter'
  if (month===2||month===3||month===4) return 'spring'
  if (month===5||month===6||month===7) return 'summer'
  if (month===8||month===9||month===10) return 'autumn'
  } else {
    throw new Error('Invalid date!')
  }
  
  
  
}

module.exports = {
  getSeason
};
