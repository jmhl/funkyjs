/*jslint node: true */

'use strict';

var curry = require('./curry');

module.exports = add;

/**
 * Adds two numbers together.
 *
 * This function can be curried.
 *
 * @param {number} a This value can be curried.
 * @param {number} b
 *
 * @returns {number} The sum of the two numbers.
 *
 * @example
 * add(2, 3);
 * // returns 5
 *
 * @example
 * var addTwo = add(2);
 *
 * addTwo(3);
 * // returns 5
 */

function add(a, b) {
  if (arguments.length === 1) {
    return curry(add)(a);
  }

  return a + b;
}
