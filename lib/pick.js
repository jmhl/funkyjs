'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isObject = require('./isObject');

module.exports = pick;

/**
 * Takes an object and an array of keys, and then returns a new object containing just the key, value pairings from the given keys.
 *
 * If an object does not contain one of the keys passed to it, pick will ignore those undefined properties and still return an object.
 *
 * This function can be curried.
 *
 * @param {array} array An array of the property names that we wish to pick from an object. Even if you are just picking one value, it must be wrapped in an array.
 * @param {object} obj The original object that we wish to pick values from.
 *
 * @returns {object} A new object with just the specified properties picked from the array.
 *
 * @example
 * var obj = { 'one': 1, 'two': 2, 'three': 3 };
 *
 * pick(['one', 'three'], obj);
 * // returns { 'one': 1, 'three': 3 }
 *
 * @example
 * var obj = { 'one': 1, 'two': 2, 'three': 3 };
 * var pickProps = pick(['one', 'three', 'four']);
 *
 * pickProps(obj);
 * // returns { 'one': 1, 'three': 3 }
 */

function pick(props, obj) {
  if (arguments.length === 1 && isArray(props)) {
    return curry(pick)(props);
  }

  if (!isObject(obj)) {
    throw new TypeError('Pick must be used with an object'); 
  }

  return _pick(props, obj);
}

function _pick(props, obj) {
  var result = {};
  var len = props.length;

  for (var i = 0; i < len; i += 1) {
    var key = props[i];
    var prop = obj[key];
    
    if (prop) {
      result[key] = prop;
    }
  }

  return result;
}
