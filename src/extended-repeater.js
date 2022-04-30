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

  str = str+''
  const addition = options.addition+''
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  const additionRepeatTimes = options.additionRepeatTimes
  const separator = options.separator ? options.separator : '+'
  const repeatTimes = options.repeatTimes

  let arr = []
  let i = 0
  let j = 0
 
  do {
    arr.push(str)
    
  
    do {
      if (additionRepeatTimes){
        arr.push(addition)
      if (j + 1 !== additionRepeatTimes) {
        arr.push(additionSeparator)
      }
      j++
      }
      
    } while (j < additionRepeatTimes)
   
    if (i + 1 !== repeatTimes) {
      arr.push(separator)
    }
    i++
    j=0
  } while (i < repeatTimes)
 
  return arr.join('')
  }

module.exports = {
  repeater
};
