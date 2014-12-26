/*jslint node: true */

'use strict';

var curry    = require('./curry');
var isObject = require('./isObject');

module.exports = get;

/**
 * Retrieves the value from the object. This function can be curried.
 *
 * @param {object} obj The object to retrieve the value from.
 * @param {var} prop The key used to access the object.
 *
 * @returns {var} The value from the object.
 *
 * @example
 * var obj = { 'one': 1, 'two': 2 };
 *
 * get(obj, 'two');
 * // returns 2
 *
 * @example
 * var obj = { 'one': 1, 'two': 2 };
 * var getObj = get(obj);
 *
 * getObj('two');
 * // 2
 */

function get(obj, prop) {
  var objIsObject = isObject(obj);

  if (!objIsObject) {
    throw new TypeError('Get must be used with an object');
  }

  if (arguments.length === 1 && objIsObject) {
    return curry(get)(obj);
  } else {
    return obj[prop];
  }
}
