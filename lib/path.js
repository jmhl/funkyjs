'use strict';

module.exports = path;

function path(path, object) {
  var keys = path.split('.');
  var len = keys.length; 
  var result = object;

  for (var i = 0; i < len; i += 1) {
    result = result[keys[i]]; 
  }

  return result;
}
