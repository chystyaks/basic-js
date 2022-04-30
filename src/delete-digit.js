const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n=n+''
  let biggest = 0
  for (let num in n){
  let current = +(n.slice(0,num++)+n.slice(num))
  if (current>biggest){
  biggest=current
  }
  }
  return biggest
}

module.exports = {
  deleteDigit
};
