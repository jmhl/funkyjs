'use strict';

var isArray  = require('./isArray');
var isObject = require('./isObject');

module.exports = copy;

/**
 * It deeply copies an array or an object.
 *
 * @param {array/object} list The array or object that you wish to be copied.
 *
 * @returns {array/object} A new array or object that is a deep copy of the given parameter.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * copy(arr);
 * // returns [1, 2, 3]
 *
 * @example
 *  var obj = {
 *    'one': 1,
 *    'two': 2,
 *    'three': {
 *      'four': 4 
 *    }
 *  };
 *
 * copy(obj);
 * // returns {
 * //   'one': 1,
 * //   'two': 2,
 * //   'three': {
 * //     'four': 4 
 * // }
 */

function copy(list) {
  var listIsObject = isObject(list);

  if (!isArray(list) && !listIsObject) {
    throw new TypeError('Copy must be called with either an array or an object');
  }

  if (listIsObject) {
    return _copyObject(list);
  }

  var len = list.length;
  var result = new Array(len);

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (isArray(item) || isObject(item)) {
      result[i] = (copy(item));
    } else {
      result[i] = (item);
    }
  }

  return result;
}

function _copyObject(obj) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    var key = keys[i]
    var item = obj[key];

    if (isArray(item) || isObject(item)) {
      result[key] = copy(item);
    } else {
      result[key] = item;
    }
  }

  return result;
}
