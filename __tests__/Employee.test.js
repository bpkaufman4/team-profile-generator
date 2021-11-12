const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Brian', 1, "bpkaufman4@gmail.com");

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toBe('Brian');
    expect(employee.email).toBe('bpkaufman4@gmail.com');
});

test('gets the employees name', () => {
    const employee = new Employee('Brian', 1, "bpkaufman4@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets the employees id', () => {
    const employee = new Employee('Brian', 1, "bpkaufman4@gmail.com");

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets the employees email', () => {
    const employee = new Employee('Brian', 1, 'bpkaufman4@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets the employees role', () => {
    const employee = new Employee('Brian', 1, 'bpkaufman4@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});