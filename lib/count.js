'use strict';

module.exports = count;

function count(arr, val) {
  var count = 0;
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    if (arr[i] === val) {
      count += 1;
    }
  }

  return count;
}
