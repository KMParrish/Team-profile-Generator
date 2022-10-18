const Intern = require("../lib/Intern")

test("sets school", () => {
    const variable = "Rice";
    const intern = new Intern("Kyle", 27, "parrish.kyle477@gmail.com", variable);
    expect(intern.school).toBe(variable);
  });
  
  test("assigns intern role", () => {
    const variable = "Intern";
    const intern = new Intern("Kyle", 27, "parrish.kyle477@gmail.com", "Rice");
    expect(intern.getRole()).toBe(variable);
  });
  
  test("gets school", () => {
    const variable = "Rice";
    const intern = new Intern("Kyle", 27, "parrish.kyle477@gmail.com", variable);
    expect(intern.getSchool()).toBe(variable);
  });