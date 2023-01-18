const Manager = require('../lib/Manager');
const manager = new Manager('Ava', 1, 'ava@test.com', 101);
describe('Manager class', () => {
  test('gets the name', () => {  
    expect(manager.getName()).toBe('Ava');
  });
  
  test('gets the id', () => {
    expect(manager.getId()).toBe(1);
  });

  test('gets the Email', () => {
    expect(manager.getEmail()).toBe('ava@test.com');
  });

  test('gets the office number', () => {
    expect(manager.getOfficeNumber()).toBe(101);
  });

  test('gets the role', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});