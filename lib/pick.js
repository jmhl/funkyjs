'use strict';

var curry    = require('./curry');
var isObject = require('./isObject');

module.exports = pick;

function pick(obj, props) {
  var objIsObject = isObject(obj);

  if (!objIsObject) {
    throw new TypeError('Pick must be used with an object'); 
  }

  if (arguments.length === 1 && objIsObject) {
    return curry(pick)(obj);
  }

  return _pick(obj, props);
}

function _pick(obj, props) {
  var result = {};
  var len = props.length;

  for (var i = 0; i < len; i += 1) {
    var key = props[i];
    var prop = obj[key];
    
    if (prop) {
      result[key] = prop;
    }
  }

  return result;
}
