/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');

module.exports = detect;

/**
 * Returns the first element from an array that returns true for the given condition.
 *
 * @param {function} condition The predicate function. 
 * @param {array} list
 *
 * @returns {var} The returns the element that matches the given condition, and if no element in the array matches the condition, it returns null.
 *
 * @example
 * function isEven(num) {
 *  return num % 2 === 0;
 * }
 *
 * var list = [1, 3, 5, 6, 7, 8, 9];
 *
 * expect(detect(isEven, list);
 * // 6
 */

function detect(condition, list) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('Detect must be used with a list');
  }

  if (argsLen === 1 && isFunction(condition)) {
    return curry(detect)(condition);
  }

  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (condition(item)) {
      return item;
    }
  }

  return null;
}
