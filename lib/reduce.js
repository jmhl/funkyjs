/*jslint node: true */

'use strict';

module.exports = reduce;

/**
 * Takes a function, a base number, and a list. It performs the operation from the function, passing it both the base and the item. The result of that function call will be equal to the new base value. It will return the final calculated base value.
 *
 * @param {function} fn The function to be called on each item in the list.
 * @param {var} base While reduce is most likely to be used with numbers (so this will likely be a number, it can also be a string.
 * @param {array} list The array to perform all the operations on.
 *
 * @result {var} Returns the final value at the end of the iteration.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * var nums = [1, 2, 3];
 *
 * reduce(add, 10, nums);
 * // returns 16
 */

function reduce(fn, base, list) {
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];
    base = fn(base, item);
  }

  return base;
}
