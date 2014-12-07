'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var flip   = funky.flip;
var div    = funky.div;

describe('flip', function() {
  it('should flip the arguments of the given function', function() {
    expect(flip(div)(2, 4)).to.equal(2);
  });
});
