'use strict';

var funky = require('../funky');
var union = funky.union;

var list1 = ['a', 'b', 'c'];
var list2 = ['d', 'e', 'a'];

module.exports = {
  name: 'union',
  maxTime: 2,
  fn: function() {
    union(list1, list2)
  }
};
