const Employee = require('../lib/Employee');
const employee = new Employee('Ava', 1, 'ava@test.com');

describe('Employee class', () => {
    test('gets the name', () => {
        expect(employee.getName()).toEqual('Ava');
    });
    test('gets the id', () => {
        expect(employee.getId()).toEqual(1);
    });
    test('gets the email', () => {
        expect(employee.getEmail()).toEqual('ava@test.com');
    });
    test('gets the role', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});