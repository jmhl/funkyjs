'use strict';

module.exports = compare;

function compare(prop, obj1, obj2) {
  return obj1[prop] === obj2[prop];
}
