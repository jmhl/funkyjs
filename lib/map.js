'use strict';

module.exports = map;

function map(iterable, fn) {
  if (iterable instanceof Array) {
    var result = [];

    iterable.forEach(function(item) {
      result.push(fn(item));
    });
  } else if (iterable instanceof Object) {
    var result = {};
    var keys = Object.keys(iterable);

    keys.forEach(function(key) {
      result[key] = (fn(iterable[key])); 
    });
  } else {
    throw new TypeError('Object must be of type Array');
  }

  return result;
}
