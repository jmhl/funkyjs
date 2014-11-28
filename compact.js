'use strict';

var isObject = require('./is_object');

module.exports = compact;

function compact(list, inPlace) {
  if (isObject(list)) {
    return inPlace
      ? _objectCompactIP(list)
      : _objectCompact(list);
  } else if (Array.isArray(list)) {
    return inPlace
      ? _arrayCompactIP(list)
      : _arrayCompact(list);
  } else {
    throw new TypeError('Compact takes only an array or an object');
  }
}

function _arrayCompact(list) {
  var result = [];

  list.forEach(function(item) {
    if (item) {
      result.push(item);
    }
  });

  return result;
}

function _arrayCompactIP(list) {
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    if (!list[i]) {
      list.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return list;
}

function _objectCompact(obj) {
  var result = {};
  var keys = Object.keys(obj);

  keys.forEach(function(key) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  });

  return result;
}

function _objectCompactIP(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;

  keys.forEach(function(key) {
    if (!obj[key]) {
      delete obj[key];   
    }
  });

  return obj;
}
