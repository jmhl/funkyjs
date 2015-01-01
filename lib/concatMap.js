/*jslint node: true */

'use strict';

var isArray = require('./isArray');

module.exports = concatMap;

/**
 * Short to using both map and concat; maps an array and then concatenates the result.
 *
 * @params {function} fn The function that will be applied to each element in the array.
 * @params {array} arr The array to map.
 *
 * @returns Will return either an array or a string - depending on the result of the function (fn).
 *
 * @example
 * function nest(x) {
 *   return [x];
 * }
 *
 * var arr = [1, 2, 3];
 *
 * concatMap(nest, arr);
 * // returns [1, 2, 3]
 *
 * @example
 * function addBang(x) {
 *   return x + '!';
 * }
 *
 * var arr = ['a', 'b', 'c'];
 *
 * concatMap(addBang, arr);
 * // returns 'a!b!c!'
 */

function concatMap(fn, arr) {
  var result = [];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    var x = fn(arr[i]);

    if (isArray(x)) {
      result = result.concat(x);
    } else {
      result += x;
    }
  }

  return result;
}
