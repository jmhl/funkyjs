'use strict';

var curry = require('./curry');
var flip  = require('./flip');

module.exports = div;

/**
 * Divides two numbers.
 *
 * This function can be curried.
 *
 * @param {number} a The number to be divided.
 * @param {number} b The divisor.
 *
 * @returns {number} The result of the division.
 *
 * @example
 * div(4, 2);
 * // returns 2
 *
 * @example
 * var divideByTwo = div(2);
 *
 * divideByTwo(8);
 * // returns 4
 */

function div(a, b) {
  if (arguments.length === 1) {
    return curry(flip(div))(a);
  }

  return a / b;
}
