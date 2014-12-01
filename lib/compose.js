'use strict';

module.exports = compose;

function compose() {
  var len = arguments.length - 1;
  var fns = [];

  for (var i = len; i >= 0; i -= 1) {
    fns.push(arguments[i]);
  }

  return function(x) {
    fns.forEach(function(fn) {
      x = fn(x);
    });

    return x;
  }
}
