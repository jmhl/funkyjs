'use strict';

var curry = require('./curry');

module.exports = mult;

/**
 * Multiplies two numbers.
 *
 * This function can be curried.
 *
 * @param {number} a
 * @param {number} b
 *
 * @returns {number} The result of the multiplication.
 *
 * @example
 * mult(2, 3);
 * // returns 6
 *
 * @example
 * var multiplyByTwo = mult(2);
 *
 * multiplyByTwo(3);
 * // returns 6
 */

function mult(a, b) {
  if (arguments.length === 1) {
    return curry(mult)(a);
  }

  return a * b;
}
