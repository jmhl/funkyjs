/*jslint node: true */

'use strict';

module.exports = rand;

/**
 * Returns a random whole number.
 *
 * @param {number} min The lower bound (this number is always inclusive).
 * @param {number} max The upper bound. This number is exclusive, unless a third boolean argument is passed in as true (isInclusive).
 * @param {boolean} isInclusive (optional) When this is true, the upper bound (max) is inclusive.
 *
 * @returns {number} Returns a random whole number.
 *
 * @example
 * rand(0, 5);
 * // returns a whole number between 0 and 4
 *
 * @example
 * rand(0, 5, true);
 * // returns a whole number between 0 and 5
 */

function rand(min, max, isInclusive) {
  if (isInclusive) {
    max += 1;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}
