'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = groupBy;

/**
 * Allows you to group a list by a given function.
 *
 * This function can be curried.
 *
 * @param {function} groupFn The function that you wish to group the list by.
 * @param {array} list An array of objects to be grouped.
 *
 * @returns {object} Returns an object of the grouped list.
 *
 * @xample
 * function grade(student) {
 *   var score = student.score;
 * 
 *   switch (score) {
 *     case 10: return 'A';
 *     case 9 : return 'A';
 *     case 8 : return 'B';
 *     case 7 : return 'C';
 *     case 6 : return 'D';
 *     case 5 : return 'F';
 *     case 4 : return 'F';
 *     case 3 : return 'F';
 *     case 2 : return 'F';
 *     case 1 : return 'F';
 *     case 0 : return 'F';
 *   }
 * }
 *
 *  var students = [
 *    { name: 'Joshua', score: 6 },
 *    { name: 'Arnold', score: 8 },
 *    { name: 'Becky', score: 7 }
 *  ];
 *
 * groupBy(grade, students);
 * // returns {
 *    'B': [{ name: 'Arnold', score: 8 }],
 *    'C': [{ name: 'Becky', score: 7 }],
 *    'D': [{ name: 'Joshua', score: 6 }],
 *  }
 *
 * @example
 * var groupByGrade = groupBy(grade);
 *
 * groupByGrade(students);
 * // returns {
 *    'B': [{ name: 'Arnold', score: 8 }],
 *    'C': [{ name: 'Becky', score: 7 }],
 *    'D': [{ name: 'Joshua', score: 6 }],
 *  }
 */

function groupBy(groupFn, list) {
  var argsLen = arguments.length;

  if (argsLen === 1 && !isArray(groupFn)) {
    return curry(groupBy)(groupFn);
  }

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('groupBy requires a list');
  }

  var result = {};
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];
    var group = groupFn(item);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}
