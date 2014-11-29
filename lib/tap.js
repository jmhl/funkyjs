'use strict';

var isFunction = require('./isFunction');

module.exports = tap;

function tap(fn, x) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curry(tap)(fn);
  }

  fn(x);
  return x;
}
