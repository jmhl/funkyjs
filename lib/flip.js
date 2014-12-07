'use strict';

module.exports = flip;

/**
 * Reverses the argument order for a given function.
 *
 * @param {function} fn The function whose arguments you want flipped.
 *
 * @returns {function} A function that wraps the given function and reverses the arguments given to it.
 *
 * @example
 * function div(a, b) {
 *  return a / b;
 * }
 *
 * var flippedDiv = flip(div);
 *
 * flippedDiv(2, 4);
 * // returns 2
 */

function flip(fn) {
  return function() {
    var len = arguments.length;
    var args = new Array(len);
    var j = 0;

    for (var i = len - 1; i >= 0; i -= 1, j += 1) {
      args[i] = arguments[j]; 
    }

    return fn.apply(null, args);
  };
}
