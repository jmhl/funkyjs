'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = allAs;

function allAs(predicates, test) {
  var len = predicates.length;

  if (arguments.length === 1 && isArray(predicates)) {
    return curry(allAs)(predicates);
  }

  for (var i = 0; i < len; i += 1) {
    if (!predicates[i](test)) {
      return false;
    }
  }

  return true;
}
