const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0
  let one = s1.split('')
  let two = s2.split('')
  for (let i=0;i<one.length;i++){
  for (let j=0;j<two.length;j++){
  if (one[i]===two[j]){
  one.splice(i,1)
  two.splice(j,1)
  count++
  i=0,j=0
  }
  }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
