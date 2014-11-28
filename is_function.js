'use strict';

module.exports = isFunction;

function isFunction(fn) {
  return !!fn && fn instanceof Function;
}
