'use strict';

var curry = require('./curry');

module.exports = mult;

function mult(a, b) {
  if (arguments.length === 1) {
    return curry(mult)(a);
  }

  return a * b;
}
