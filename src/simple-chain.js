const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {

  data: [],

  getLength() {
    return this.data.length;
  },
  addLink(value) {
    this.data.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (position + 1 > this.data.length || !Number.isInteger(position - 1) || position <= 0 ) {
      this.data.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    for (let i = position - 1; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    return this;
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    let result = this.data.join('').slice(0,-2);
    this.data.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
