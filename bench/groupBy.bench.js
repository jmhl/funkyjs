'use strict';

var funky   = require('../funky');
var groupBy = funky.groupBy;

var students = [
  { name: 'Joshua', score: 6 },
  { name: 'Arnold', score: 8 },
  { name: 'Becky', score: 7 }
];

module.exports = {
  name: 'groupBy',
  maxTime: 2,
  fn: function() {
    groupBy(grade, students);
  }
};

function grade(student) {
  var score = student.score;

  switch (score) {
    case 10: return 'A';
    case 9 : return 'A';
    case 8 : return 'B';
    case 7 : return 'C';
    case 6 : return 'D';
    case 5 : return 'F';
    case 4 : return 'F';
    case 3 : return 'F';
    case 2 : return 'F';
    case 1 : return 'F';
    case 0 : return 'F';
  }
}
