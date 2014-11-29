'use strict';

var curry = require('./curry');

module.exports = add;

function add(a, b) {
  if (arguments.length === 1) {
    return curry(add)(a);
  }

  return a + b;
}
