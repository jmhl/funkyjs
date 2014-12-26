/*jslint node: true */

'use strict';

module.exports = fst;

/**
 * Returns the first item in a pair. Useful for coordinates.
 *
 * @param {array} pair An array of 2 items.
 *
 * @returns {element} Returns the first item in the array.
 *
 * @example
 * var pair = [1, 2];
 *
 * fst(pair)
 * // returns 1
 */

function fst(pair) {
  if (pair.length === 2) {
    return pair[0];
  } else {
    throw new TypeError('Array must contain only two items');
  }
}
