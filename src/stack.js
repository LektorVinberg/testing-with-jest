const _ = require("underscore");

let stack = [];

exports.push = function (x) {
  //stack.push(x);
  stack.unshift(x); //här blir det knasigt eftersom vi inte lägger saker "längst upp" i stacken utan "längst ner" istället...
};

exports.pop = function () {
  return stack.pop();
};

exports.peek = function () {
  return _.last(stack);
};

exports.clear = function () {
  stack = [];
};
