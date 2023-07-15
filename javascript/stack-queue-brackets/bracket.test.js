"use strict";

const Stack = require("./stack-queue-brackets");

describe("Stack test", () => {
  test("Can successfully test validate of bracketes", () => {
    const stack = new Stack();

    expect(stack.validateBrackets("{}")).toBe(true);
    expect(stack.validateBrackets("{}(){}")).toBe(true);
    expect(stack.validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(stack.validateBrackets("(){}[[]]")).toBe(true);
    expect(stack.validateBrackets("[({}]")).toBe(false);
    expect(stack.validateBrackets("(](")).toBe(false);
    expect(stack.validateBrackets("{(})")).toBe(false);

  });
});