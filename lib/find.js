/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');

module.exports = find;

/**
 * Returns the first element from the list which returns true from the predicate function. If no element is found, it returns undefined.
 *
 * This function can be curried.
 *
 * @param {function} predicate
 * @param {array} list
 *
 * @returns {element} The first element from the list that matches the predicate, or undefined.
 *
 * @example
 * function isEven(a) {
 *   return a % 2 === 0;
 * }
 *
 * var list = [5, 7, 3, 6, 2, 8];
 *
 * find(isEven, list);
 * // returns 6
 *
 * @example
 * var list = [5, 7, 3, 6, 2, 8];
 *
 * var findEven = find(isEven);
 * findEven(list);
 * // returns 6
 */

function find(predicate, list) {
  if (arguments.length === 1 && isFunction(predicate)) {
    return curry(find)(predicate);
  }

  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    if (predicate(list[i])) {
      return list[i];
    }
  }

  return undefined;
}
