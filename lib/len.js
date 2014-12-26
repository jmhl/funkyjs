/*jslint node: true */

'use strict';

var isArray  = require('./isArray');
var isObject = require('./isObject');
var isString = require('./isString');

module.exports = len;

/**
 * Returns the length of a given item. If used with a string or array, will return the length of eeach; if used with an object, it will return the number of keys in the object. 
 *
 * @param {array/string/object} item
 *
 * @returns {number} The length of the item.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * len(arr);
 * // returns 3
 *
 * @example
 * var str = 'test';
 *
 * len(str);
 * // returns 4
 *
 * @example
 * var obj = { 'one': 1, 'two': 2 };
 *
 * len(obj);
 * // returns 2
 */

function len(item) {
  if (isArray(item) || isString(item)) {
    return item.length;
  } else if (isObject(item)) {
    return Object.keys(item).length;
  } else {
    throw new TypeError('Len must be used with an object, array, or string');
  }
}
