'use strict';

module.exports = split;

function split(str, splitter) {
  var result = [];
  var len = str.length;
  var count = 0;

  for (var i = 0; i < len; i += 1) {
    if (str[i] === splitter) {
      count += 1;
    } else {
      if (!result[count]) {
        result[count] = '';
      }

      result[count] += str[i];
    }
  }

  return result;
}
