const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const result = {};

    for (const domain of domains) {
        const splitDomain = domain.split('.').reverse();

        let key = '';

        splitDomain.reduce((acc, currentKey) => {
            key += `.${currentKey}`;

            acc[key] = acc[key] || 0;
            acc[key]++;

            return acc;
        }, result);
    }

    return result;
}


const domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
];
getDNSStats(domains);

module.exports = {
  getDNSStats
};
