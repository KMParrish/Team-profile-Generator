const Manager = require("../lib/Manager");

test("sets office number", () => {
  const variable = 100;
  const manager = new Manager("Kyle", 27, "parrish.kyle477@gmail.com", variable);
  expect(manager.officeNumber).toBe(variable);
});

test("assigns manager role", () => {
  const variable = "Manager";
  const manager = new Manager("Kyle", 27, "parrish.kyle477@gmail.com", 100);
  expect(manager.getRole()).toBe(variable);
});

test("gets office number", () => {
  const variable = 100;
  const manager = new Manager("Kyle", 27, "parrish.kyle477@gmail.com", variable);
  expect(manager.getOfficeNumber()).toBe(variable);
});