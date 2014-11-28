'use strict';

var curry = require('./curry');

module.exports = reject;

function reject(condition, list) {
  if (!Array.isArray(list) && arguments.length > 1) {
    throw new TypeError('Reject must be used with a list');
  }

  if (!Array.isArray(condition) && arguments.length < 2) {
    return curry(reject)(condition);
  }

  var result = [];

  list.forEach(function(item) {
    if (!condition(item)) {
      result.push(item);
    }
  });

  return result;
}
