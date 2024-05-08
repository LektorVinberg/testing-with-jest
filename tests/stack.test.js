const stack = require("../src/stack");

test("peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

test("peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

test("peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("wow");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});

test("pushing multiple elements on to stack and then peeking should have peek method return the last element pushed", () => {
  //rensar först stacken för att ha en "clean slate..."
  stack.clear();
  stack.push("first");
  stack.push("second");
  expect(stack.peek()).toBe("second");
});
