'use strict';

module.exports = divmod;

// http://www.ruby-doc.org/core-2.1.5/Numeric.html#method-i-divmod
function divmod(dividend, divisor) {
  var result = [];

  var quotient = Math.floor(dividend / divisor);
  var modulus = dividend - (divisor * quotient);

  result.push(quotient);
  result.push(modulus);

  return result;
}
