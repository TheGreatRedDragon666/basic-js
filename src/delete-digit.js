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
  let arr = String(n).split('').map(digit => parseInt(digit));
  let i1 = findMinElInd(arr);
  let a1 = arr.slice();
  delete a1[i1];
  let i2 = findMinElInd(a1);
  let a2 = arr.slice();
  delete a2[i2];
  let n1 = +a1.filter(digit => digit !== undefined).join('');
  let n2 = +a2.filter(digit => digit !== undefined).join('');
  return n1 >= n2 ? n1 : n2;
}

function findMinElInd(arr) {
  return arr.indexOf(arr.reduce((a,b) => Math.min(a,b)));
}
module.exports = {
  deleteDigit
};
