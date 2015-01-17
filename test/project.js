'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var project = funky.project;

describe('project', function() {
  var abby;
  var fred;
  var kids;
  var result;

  before(function() {
    abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
    fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
    kids = [abby, fred];

    result = [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}];
  });

  it('should project the props of the objects', function() {
    var projectedObjs = project(['name', 'grade'], kids);

    expect(projectedObjs).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var projectedProps = project(['name', 'grade']);

    expect(projectedProps(kids)).to.deep.equal(result);
  });
});
