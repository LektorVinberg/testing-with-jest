const _ = require("underscore");

let stack = [];

exports.push = function (x) {
  stack.push(x); //nu är stacken lagad igen och allt är som vanligt
};

exports.pop = function () {
  return stack.pop();
};

exports.peek = function () {
  return _.last(stack);
};

//lade till denna funktionen för att kunna rensa stacken innan ett av mina tester...
exports.clear = function () {
  stack = [];
};
