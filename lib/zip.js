'use strict';

var isObject = require('./isObject');

module.exports = zip;

/**
 * Takes two arrays or one object and returns a new, multidimensional, zipped array or object. A zipped object will have subarrays of [key, value] for each key, value pairing. The zipped array will have subarrays of length two with items from each corresponding position in each array.
 *
 * If the arrays are of unequal length, the result will be zipped based on the length of the shortest array (the remaining items of the longer array will be ignored).
 *
 * @param list1 {array/object} The first array to zip with a second array, or the object to zip.
 * @param list2 {array} (optional) The second array to zip.
 *
 * @returns {array/object} Returns the zipped array or object.
 *
 * @example
 * var list1 = [1, 2, 3];
 * var list2 = ['a', 'b', 'c'];
 * 
 * zip(list1, list2);
 * // returns [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * @example
 * var obj = { 'one': 1, 'two': 2, 'three': 3 };
 *
 * zip(obj);
 * // returns [['one', 1], ['two', 2], ['three', 3]]
 */

function zip(list1, list2) {
  if (isObject(list1)) {
    return _zipObject(list1);
  }

  return _zipArray(list1, list2);
}

function _zipArray(list1, list2) {
  var len1 = list1.length;
  var len2 = list2.length;
  var maxLength = Math.min(len1, len2);
  var result = [];

  for (var i = 0; i < maxLength; i += 1) {
    result.push([list1[i], list2[i]]); 
  }

  return result;
}

function _zipObject(obj) {
  var keys = Object.keys(obj);
  var keysLen = keys.length;
  var result = new Array(keysLen);

  for (var i = 0; i < keysLen; i += 1) {
    var key = keys[i];

    result[i] = [key, obj[key]];
  }

  return result;
}
