/*jslint node: true */

'use strict';

var isArray  = require('./isArray');
var isObject = require('./isObject');

module.exports = compact;

/**
 * Removes all falsy values from an array or object.
 *
 * @param {array/object} list
 * @param {boolean} inPlace (optional) This determines whether you want to run the function in place. This is false by default.
 *
 * @returns {array/object} Returns a compacted array or object (depending on which you passed in).
 *
 * @example
 * var arr = [0, 1, 2, 'a', ''];
 *
 * compact(arr);
 * // returns [1, 2, 'a'];
 *
 * @example
 * var arr = [0, 1, 2, 'a', ''];
 *
 * compact(arr, true);
 * // returns [1, 2, 'a'];
 * // Also note that, in this case, arr === [1, 2, 'a']
 */

function compact(list, inPlace) {
  if (isArray(list)) {
    return inPlace ?
      _arrayCompactIP(list) :
      _arrayCompact(list);
  } else if (isObject(list)) {
    return inPlace ?
      _objectCompactIP(list) :
      _objectCompact(list);
  } else {
    throw new TypeError('Compact takes only an array or an object');
  }
}

function _arrayCompact(list) {
  var len = list.length;
  var result = []; 

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (item) {
      result.push(item);
    }
  }

  return result;
}

function _arrayCompactIP(list) {
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    if (!list[i]) {
      list.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return list;
}

function _objectCompact(obj) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    if (obj[keys[i]]) {
      result[keys[i]] = obj[keys[i]];
    }
  }

  return result;
}

function _objectCompactIP(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    if (!obj[keys[i]]) {
      delete obj[keys[i]];   
    }
  }

  return obj;
}
