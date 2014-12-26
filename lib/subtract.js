/*jslint node: true */

'use strict';

var curry = require('./curry');
var flip  = require('./flip');

module.exports = subtract;

/**
 * Subtract one number from another.
 *
 * This function can be curried.
 *
 * @param {number} a
 * @param {number} b The number to minus from the first.
 *
 * @returns {number} The result of the subtraction operation.
 *
 * @example
 * subtract(10, 3);
 * // returns 7
 *
 * @example
 * var subtractTwo = subtract(2);
 *
 * subtractTwo(10);
 * // returns 8
 */

function subtract(a, b) {
  if (arguments.length === 1) {
    return curry(flip(subtract))(a);
  }

  return a - b;
}
