'use strict';

var isObject = require('./isObject');

module.exports = invert;

/**
 * Returns a new object that has the keys and the values of the original object swapped.
 *
 * @param {object} obj The original object which you want to be inverted.
 *
 * @returns {object} The new object with the inverted keys and values.
 *
 * @example
 * var obj = {
 *   'one': 1,
 *   'two': 2,
 *   'three': 3,
 *   'four': 4
 * };
 *
 * invert(obj)
 * // returns {
 *   1: 'one',
 *   2: 'two',
 *   3: 'three',
 *   4: 'four'
 * }
 */

function invert(obj) {
  if (!isObject(obj)) {
    throw new TypeError('Invert must take an object');
  }

  var newObj = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    var key = keys[i];

    newObj[obj[key]] = key;
  }

  return newObj;
}
