/*jslint node: true */

'use strict';

var curry = require('./curry');

module.exports = project;

/**
 * Returns an array of objects made up of just the properties passed to the function.
 *
 * This function can be curried.
 *
 * @param {array} props The list of properties to include in the result.
 * @param {array} objs The objects whose properties we want to return.
 *
 * @result {array} An array of objects where each object is the key/value from an object from the argument objs.
 *
 * @example
 * var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
 * var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
 * var kids = [abby, fred];
 *
 * project(['name', 'grade'], kids);
 * // returns [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 *
 * @example
 * var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
 * var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
 * var kids = [abby, fred];
 * var projectedProps = project(['name', 'grade']);
 *
 * projectedProps(kids);
 * // returns [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}] 
 */
function project(props, objs) {
  if (arguments.length === 1) {
    return curry(project)(props);
  }

  var propsLen = props.length;
  var objsLen = objs.length;
  var result = new Array(objsLen);

  for (var i = 0; i < objsLen; i += 1) {
    var obj = objs[i];
    var newObj = {};

    for (var j = 0; j < propsLen; j += 1) {
      var key = props[j];
      var item = obj[key] || undefined;

      newObj[key] = item;
    }

    result[i] = newObj;
  }

  return result;
}
