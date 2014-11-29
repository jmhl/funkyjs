'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var div    = funky.div;

describe('div', function() {
  it('should perform simple division', function() {
    expect(div(6, 2)).to.equal(3);
  });
});
