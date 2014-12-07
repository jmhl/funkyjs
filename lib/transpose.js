'use strict';

var isArray = require('./isArray');

module.exports = transpose;

/**
 * Takes a multidimensional array (where all subarrays are of equal length), and returns a new multidimensional array where the subarrays have one value from each of the original subarrays. Probably best explained by example (see below).
 *
 * @param {array} arrs A multidimensional array.
 *
 * @returns {array} A multidimsional, transposed array.
 *
 * @example
 * var arr = [[1, 2], [3, 4], [5, 6]];
 *
 * transpose(arr);
 * // returns [[1, 3, 5], [2, 4, 6]]
 */

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
