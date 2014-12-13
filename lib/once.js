'use strict';

module.exports = once;

/**
 * Returns a function that can only be called one time and also stores the answer to that function and returns that answer if called subsequent times regardless of the arguments passed to it.
 *
 * @param {function} The function that you wish to be called only once.
 *
 * @returns {function} A function that can only be called one time, or if the function has been called more than once, return the original answer.
 *
 * @example
 * var square = function(a) {
 *   return a * a;
 * };
 *
 * var squareOnce = once(square);
 *
 * squareOnce(2);
 * // returns 4
 *
 * squareOnce(3);
 * // returns 9
 */
function once(fn) {
  var count = 0;
  var result;

  return function() {
    count += 1;

    if (count === 1) {
      result = fn.apply(null, arguments);
    }

    return result;
  }
}
