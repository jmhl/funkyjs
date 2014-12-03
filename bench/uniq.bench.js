'use strict';

var funky = require('../funky');
var uniq = funky.uniq;

var list1 = ['a', 'b', 'c'];
var list2 = ['c', 'e', 'a'];

module.exports = {
  name: 'uniq',
  maxTime: 2,
  fn: function() {
    uniq(list1, list2);
  }
};
