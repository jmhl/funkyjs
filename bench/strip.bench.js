'use strict';

var funky = require('../funky');
var strip = funky.strip; 

var str = 'hello there';

module.exports = {
  name: 'strip',
  maxTime: 2,
  fn: function() {
    strip(str);
  }
};
