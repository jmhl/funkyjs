'use strict';

module.exports = reduce;

function reduce(fn, base, list) {
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];
    base = fn(base, item);
  }

  return base;
}
