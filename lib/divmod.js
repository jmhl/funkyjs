'use strict';

module.exports = divmod;

/**
 * Similar to Ruby's divmod function (http://www.ruby-doc.org/core-2.1.5/Numeric.html#method-i-divmod). First divides and then takes the modulus of the number.
 *
 * @param {number} dividend
 * @param {number} divisor
 *
 * @returns {array} An array that includes both the quotient and modulus.
 *
 * @example
 * divmod(11, 3);
 * // [3, 2]
 *
 * @example
 * divmod(11, 3.5);
 * // [3, 0.5]
 */

function divmod(dividend, divisor) {
  var result = [];

  var quotient = Math.floor(dividend / divisor);
  var modulus = dividend - (divisor * quotient);

  result.push(quotient);
  result.push(modulus);

  return result;
}
