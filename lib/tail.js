/*jslint node: true */

'use strict';

module.exports = tail;

/**
 * Returns the tail of an array - the array minus the first element.
 *
 * @params {array} arr
 *
 * @returns {array} Returns a new array of all the elements from the original array with the exception of the first element.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * tail(arr);
 * // returns [2, 3]
 */

function tail(arr) {
  var len = arr.length;
  var result = new Array(len - 1);

  for (var i = 1; i < len; i += 1) {
    result[i - 1] = arr[i];
  }

  return result;
}
