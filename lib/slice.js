'use strict';

module.exports = slice;

function slice(list, start, length) {
  var result = '';

  for (var i = start; i < start + length; i += 1) {
    result += list[i];
  }

  return result;
}
