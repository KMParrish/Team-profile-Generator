const Engineer = require("../lib/engineer")

test("sets the github account", () => {
    const variable = "Github";
    const engineer = new Engineer("Kyle", 27, "parrish.kyle477@gmail.com", variable);
    expect(engineer.github).toBe(variable);
  });
  
  test("assigns role as engineer", () => {
    const variable = "Engineer";
    const engineer = new Engineer("Kyle", 27, "parrish.kyle477@gmail.com", "Github");
    expect(engineer.getRole()).toBe(variable);
  });
  
  test("gets github user", () => {
    const variable = "GitHubUser";
    const engineer = new Engineer("Kyle", 27, "parrish.kyle477@gmail.com", variable);
    expect(engineer.getGithub()).toBe(variable);
  });