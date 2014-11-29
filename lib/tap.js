'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = tap;

function tap(fn, a) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curry(tap)(fn);
  }

  fn(a);
  return a;
}
