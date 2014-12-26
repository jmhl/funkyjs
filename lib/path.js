/*jslint node: true */

'use strict';

module.exports = path;

/**
 * Returns the data specified from a path on an object that is separated by periods.
 *
 * @params {string} path A period-separted path.
 * @params {object} object The object to traverse.
 *
 * @returns The data at the end of the path.
 *
 * @example
 * var obj = {
 *   'one': {
 *     'two': 2
 *   }
 * };
 *
 * path('one.two', obj);
 * // returns 2
 */

function path(path, object) {
  var keys = path.split('.');
  var len = keys.length; 
  var result = object;

  for (var i = 0; i < len; i += 1) {
    result = result[keys[i]]; 
  }

  return result;
}
