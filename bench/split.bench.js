'use strict';

var funky = require('../funky');
var split = funky.split; 

var str = 'hello there';

module.exports = {
  name: 'split',
  maxTime: 2,
  fn: function() {
    split(str, '');
  }
};
