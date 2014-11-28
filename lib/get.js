'use strict';

var curry    = require('./curry');
var isObject = require('./isObject');

module.exports = get;

function get(obj, prop) {
  if (!isObject(obj)) {
    throw new TypeError('Get must be used with an object');
  }

  if (arguments.length === 1 && isObject(obj)) {
    return curry(get)(obj);
  } else {
    return obj[prop];
  }
}
