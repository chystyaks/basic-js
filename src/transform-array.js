const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let newArr=arr.map(x=>x)
    for (let i=0; i<arr.length; i++){
    if (newArr[i] ==='--discard-next'){
      if(newArr[i+1]){
    newArr[i+1] = '-'
    }
    }
    if (newArr[i] ==='--discard-prev'){
      if (newArr[i-1]){
    newArr[i-1] = '-'
    }
    }
    if (newArr[i] ==='--double-next'){
      if(newArr[i+1]){
        newArr[i] = newArr[i+1]
      }
    }
    if (newArr[i] ==='--double-prev'){
      if (newArr[i-1]){
        newArr[i] = newArr[i-1]
      }
    }
    }
    return newArr.filter(function(el){
      if (el!=='-'&&el!=='--double-prev'&&el!=='--double-next'&&el!=='--discard-prev'&&el!=='--discard-next') {
        return true
      } else {
        return false
      }
       
      })

    }
     

module.exports = {
  transform
};
