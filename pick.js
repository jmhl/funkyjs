'use strict';

var curry = require('./curry');
var isObject = require('./is_object');

module.exports = pick;

function pick(obj, props) {
  if (!isObject(obj)) {
    throw new TypeError('Pick must be used with an object'); 
  }

  if (arguments.length === 1 && isObject(obj)) {
    return curry(pick)(obj);
  }

  return _pick(obj, props);
}

function _pick(obj, props) {
  var result = {};

  props.forEach(function(prop) {
    var newProp = obj[prop];
    
    if (newProp) {
      result[prop] = newProp;
    }
  });

  return result;
}
