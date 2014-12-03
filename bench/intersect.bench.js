'use strict';

var funky     = require('../funky');
var intersect = funky.intersect; 

var list1 = [1, 1, 3, 5];
var list2 = [1, 2, 3];

module.exports = {
  name: 'intersect',
  maxTime: 2,
  fn: function() {
    intersect(list1, list2);
  }
};
