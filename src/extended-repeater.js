const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

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
  const defSep = '+';
  const defAddSep = '|';
  if (typeof str !== 'string') str = String(str);
  let addition = options?.addition;
  if (typeof addition !== 'string') addition = String(str);
  if (options.repeatTimes) {
    if(options.additionRepeatTimes) {
       let repAdd = `${options.addition}` + (options.additionSeparator || defAddSep);
       str += repAdd.repeat(options.additionRepeatTimes - 1) + `${options.addition}`;
    }
    if(options?.addition && Object.prototype.toString.call(options.addition) === '[object Object]' &&
        Object.entries(options.addition).length === 0) {
      str += addition;
    }
    let repStr = str + (options.separator || defSep);
    str = repStr.repeat(options.repeatTimes - 1) + `${str}`;
  } else if (options.addition) {
    str += addition;
  }
  return str;
}

module.exports = {
  repeater
};
