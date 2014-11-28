'use strict';

module.exports = reduce;

function reduce(fn, base, list) {
  list.forEach(function(item) {
    base = fn(base, item);
  });

  return base;
}
