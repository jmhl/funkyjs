'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var unfold = funky.unfold;

describe('unfold', function() {
  var result;
  var minusOne;

  before(function() {
    minusOne = function(num) {
      return num - 1;
    }

    result = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  });

  it('should unfold into value into a list', function() {
    expect(unfold(minusOne, 0, 10)).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var unfoldBySubtractingOne = unfold(minusOne, 0);
    console.log(unfoldBySubtractingOne);

    expect(unfoldBySubtractingOne(10)).to.deep.equal(result);
  });
});
