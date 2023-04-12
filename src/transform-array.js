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
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  const transArr = arr.slice();
  for (let i = 0; i < transArr.length; i++) {
    if (transArr[i] === '--discard-next') {
      transArr[i + 1] = null;
      transArr[i] = null;
    }
    if (transArr[i] === '--discard-prev') {
      transArr[i - 1] = null;
      transArr[i] = null;
    }
    if (transArr[i] === '--double-prev') {
      transArr[i] = transArr[i - 1];
    }
    if (transArr[i] === '--double-next') {
      transArr[i] = transArr[i + 1];
    }
  }
  return transArr.filter(el => el !== null && el !== undefined);
}

module.exports = {
  transform
};
