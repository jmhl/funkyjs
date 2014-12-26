/*jslint node: true */

'use strict';

module.exports = snd;

/**
 * Returns the second item in a pair. Useful for coordinates.
 *
 * @param {array} pair An array of 2 items.
 *
 * @returns {element} Returns the second item in the array.
 *
 * @example
 * var pair = [1, 2];
 *
 * snd(pair)
 * // returns 2
 */

function snd(pair) {
  if (pair.length === 2) {
    return pair[1];
  } else {
    throw new TypeError('Array must contain only two items');
  }
}
