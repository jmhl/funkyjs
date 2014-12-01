'use strict';

module.exports = compose;

function compose() {
  var len = arguments.length - 1;
  var fns = [];

  for (var i = len; i >= 0; i -= 1) {
    fns.push(arguments[i]);
  }

  return function(x) {
    for (var j = 0; j < len + 1; j += 1) {
      x = fns[j](x);
    }

    return x;
  }
}
