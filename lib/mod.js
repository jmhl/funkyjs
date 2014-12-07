'use strict';

module.exports = mod;

/**
 * Returns the remainder of division of two numbers 
 *
 * @param {number} a The number to be divided.
 * @param {number} b The divisor.
 *
 * @returns {number} The modulus, or remainder of the division.
 *
 * @example
 * mod(5, 2);
 * // returns 1
 */

function mod(a, b) {
  return a % b;
}
