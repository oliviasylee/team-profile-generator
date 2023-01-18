// manager.test.js
const Manager = require('../lib/manager');

// getName(), getId(), getEmail()
// getOfficeNumber(), getRole()
describe('Manager', () => {
  test('gets the name', () => {
    const manager = new Manager('Olivia', 13, 'oliviasylee@gmail.com', 123);
    expect(manager.getName()).toBe('Olivia');
  });
  
  test('gets the id', () => {
    const manager = new Manager('Olivia', 13, 'oliviasylee@gmail.com', 123);
    expect(manager.getId()).toBe(13);
  });

  test('gets the Email', () => {
    const manager = new Manager('Olivia', 13, 'oliviasylee@gmail.com', 123);
    expect(manager.getEmail()).toBe('oliviasylee@gmail.com');
  });

  test('gets the office number', () => {
    const manager = new Manager('Olivia', 13, 'oliviasylee@gmail.com', 123);
    expect(manager.getOfficeNumber()).toBe(123);
  });

  test('gets the role', () => {
    const manager = new Manager('Olivia', 13, 'oliviasylee@gmail.com', 123);
    expect(manager.getRole()).toBe('Manager');
  });
});