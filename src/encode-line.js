const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function encodeLine(str){
//   let arr = str.split('')
//   let obj = {}
//   for (let i=0; i<arr.length;i++){
  
//   if (arr[i]===arr[i-1]){
//   if(typeof obj[arr[i]]==='number'){
//   obj[arr[i]]++
//   } else {
//   obj[arr[i]]=2
//   }
  
  
//   } else {
//   obj[arr[i]]=1
//   }
//   }
//   obj = Object.entries(obj).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
  
//   return obj
//   }

module.exports = {
  encodeLine
};
