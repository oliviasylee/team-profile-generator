// employee.test.js
const Employee = require('../lib/Employee');

describe('Employee', () => {
    test('gets the name', () => {
        const employee = new Employee('Olivia', 1, 'olivia@gmail.com');
        expect(employee.getName()).toBe('Olivia');
    });
    test('gets the id', () => {
        const employee = new Employee('Olivia', 1, 'oliviasylee@gmail.com');
        expect(employee.getId()).toBe(1);
    });
    test('gets the email', () => {
        const employee = new Employee('Olivia', 1, 'oliviasylee@gmail.com');
        expect(employee.getEmail()).toBe('oliviasylee@gmail.com');
    });
    test('gets the role', () => {
        const employee = new Employee('Olivia', 1, 'oliviasylee@gmail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});