'use strict';

module.exports = isNumber;

function isNumber(num) {
  return !isNaN(num) && parseInt(num) === num;
}
