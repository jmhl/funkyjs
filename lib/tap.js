'use strict';

module.exports = tap;

function tap(fn, x) {
  fn(x);
  return x;
}
