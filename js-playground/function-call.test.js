require("./function-call");

// Testing Function.prototype.myCall with different scenarios
describe("Function.prototype.myCall", () => {
  // The `person` object, which will be used as `this` in our tests
  const person = { name: "John", age: "21" };

  // This function returns a string describing the `this` object
  function getPerson() {
    return `this is ${this.name} and his age is ${this.age}`;
  }

  // Test to verify that `myCall` is correctly implemented as a function
  test("Function.prototype.myCall is a function", () => {
    expect(typeof Function.prototype.myCall).toBe("function");
  });

  // Test to check if `myCall` correctly binds `this`
  test("Binds `this` correctly", () => {
    expect(getPerson.myCall(person)).toBe("this is John and his age is 21");
  });
});
