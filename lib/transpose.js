'use strict';

var isArray = require('./isArray');

module.exports = transpose;

function transpose(arrs) {
  if (!isArray(arrs)) {
    throw new TypeError('Must pass an array of arrays');
  }

  var len = arrs.length;
  var subArrLen = arrs[0].length;
  var result = new Array(subArrLen);

  for (var i = 0; i < subArrLen; i += 1) {
    result[i] = new Array(len);
  }

  for (var j = 0; j < len; j += 1) {
    for (var k = 0; k < subArrLen; k += 1) {
      result[k][j] = arrs[j][k];
    }
  }

  return result;
}
