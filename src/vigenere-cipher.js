const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {


  constructor(direction = true) {
    this.direction = direction;
    // if(!flag) {
    //   return new VigenereCipheringMachineReverse;
    // }
  }

  getResult(message, key, isEncrypt = true) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = []
    let m = 0;
    let k = 0;
    let kIndex = 0;
    for (let i = 0; i < message.length; i++) {
      m = ALPHABET.indexOf(message[i].toUpperCase());

      if (message.length > key.length && kIndex >= key.length) {
        kIndex = (kIndex % key.length);
        k = ALPHABET.indexOf(key[kIndex].toUpperCase());
      }
      if (m === -1) {
        result.push(message[i]);
        continue;
      }
      k = ALPHABET.indexOf(key[kIndex].toUpperCase());
      kIndex++;

      if (isEncrypt === true) result.push(ALPHABET.at(m + k - 26));
      if (isEncrypt === false) result.push(ALPHABET.at(m - k - 26) ?? ALPHABET.at(m - k + 26));
    }
    if (this.direction) return result.join('');
    if (!this.direction) return result.reverse().join('')
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.getResult(message,key);

    // let keyLong = key.repeat(Math.ceil(message.length/key.length)).slice(0, message.length);
    // let m = [];
    // let k = [];
    // let c = [];
    //
    //   for (let i = 0; i < message.length; i++) {
    //     if ()
    //     c.push(message.codePointAt(i) - 65 + key.codePointAt(i) - 65 - 26);
    //   }
    //   result.push(c.map(code => (String.fromCharCode(code + 65))).join(''))
    //
    // return result.join(' ')


  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error ('Incorrect arguments!');
    return this.getResult(encryptedMessage,key,false);
    // const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // let result = [];
    // let m = 0;
    // let k = 0;
    // let kIndex = 0;
    // for (let i = 0; i < encryptedMessage.length; i++) {
    //   m = ALPHABET.indexOf(encryptedMessage[i].toUpperCase());
    //
    //   if (encryptedMessage.length > key.length && kIndex >= key.length) {
    //     kIndex = (kIndex % key.length);
    //     k = ALPHABET.indexOf(key[kIndex].toUpperCase());
    //   }
    //   if (m === -1) {
    //     result.push(encryptedMessage[i]);
    //     continue;
    //   }
    //   k = ALPHABET.indexOf(key[kIndex].toUpperCase());
    //   kIndex++;
    //
    //   result.push(ALPHABET.at(m - k - 26) ?? ALPHABET.at(m - k + 26));
    // }
    // return result.join('');
  }
}

// class VigenereCipheringMachineReverse extends VigenereCipheringMachine{
//   encrypt(message, key) {
//     if (!message || !key) throw new Error('Incorrect arguments!');
//     return this.getResult(message, key).split('').reverse().join('');
//   }
//
//   decrypt(encryptedMessage, key) {
//     if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
//     return this.getResult(encryptedMessage, key, false).split('').reverse().join('');
//   }
//
// }

module.exports = {
  VigenereCipheringMachine
};


// let directMachine = new VigenereCipheringMachine();
// console.log('str'.at(0))
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
// // console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
// // console.log(directMachine.encrypt('cryptography', 'verylongkeyword'), 'XVPNECTXKTFU');
// // console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW');
// // console.log(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
//
