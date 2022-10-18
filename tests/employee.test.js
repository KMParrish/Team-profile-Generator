const Employee = require("../lib/employee")

test("creates an employee (engineer, manager, or intern)", () => {
    const employee = new Employee("Kyle", 27, "parrish.kyle477@gmail.com");

    expect(employee.name).toEqual(expect.anything());
    expect(employee.id).toEqual(expect.anything());
    expect(employee.email).toEqual(expect.anything());
});

test('gets name', () => {
    const employee = new Employee("Kyle", 27, "parrish.kyle477@gmail.com");

    expect(employee.getName()).toEqual(expect.anything());
});

test('gets ID', () => {
    const employee = new Employee("Kyle", 27, "parrish.kyle477@gmail.com");

    expect(employee.getId()).toEqual(expect.anything());
});

test('gets email', () => {
    const employee = new Employee("Kyle", 27, "parrish.kyle477@gmail.com");

    expect(employee.getEmail()).toEqual(expect.anything(employee.email.toString()));
});

test('gets role', () => {
    const employee = new Employee("Kyle", 27, "parrish.kyle477@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
}); 