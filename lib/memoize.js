'use strict';

var isFunction = require('./isFunction');

module.exports = memoize;

function memoize(fn) {
  if (!isFunction(fn)) {
    throw new TypeError('Memoize only works with a function parameter');
  }

  var cache = {};

  return function() {
    var arr = [];
    var len = arguments.length;
    for (var i = 0; i < len; i += 1) {
      arr.push(arguments[i]); 
    }

    var argString = arr.toString();
    if (cache[argString]) {
      return cache[argString];
    }

    cache[argString] = fn.apply(null, arr);
    return cache[argString];
  }
}
