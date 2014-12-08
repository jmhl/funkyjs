'use strict';

module.exports = flatMap;

/**
 * Iterates over an array and calls a given function on each item; flatMap is preferred to map when the result of function returns an array itself. Flatpmap returns a new one-dimensional array in this instance. Essentially a short-cut to using map and then flatten on the result.
 *
 * In Clojure this is known as mapcat (https://clojuredocs.org/clojure.core/mapcat).
 *
 * This function can be curried.
 *
 * @param {function} fn The call to be called on each item.
 * @param {array} arr The array to be flat mapped. 
 *
 * @returns {array} A one-dimensional array of the results.
 */

function flatMap(fn, arr) {
  var result = [];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    var temp = fn(arr[i]);
    var tempLen = temp.length;

    for (var j = 0; j < tempLen; j += 1) {
      result.push(temp[j]);
    }
  }

  return result;
}
