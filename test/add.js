'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var add    = funky.add;

describe('add', function() {
  it('should perform simple addition', function() {
    expect(add(2, 3)).to.equal(5);
  });

  it('should curry the function when passed one paramter', function() {
    var add2 = add(2);

    expect(add2(3)).to.equal(5);
  });
});
