const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Ava', 2, 'ava@test.com', 'avaswe');
describe('Engineer class', () => {
  test('gets the name', () => {
    expect(engineer.getName()).toBe('Ava');
  });
  
  test('gets the id', () => {
    expect(engineer.getId()).toBe(2);
  });

  test('gets the Email', () => {
    expect(engineer.getEmail()).toBe('ava@test.com');
  });

  test('gets the gitHub account', () => {
    expect(engineer.getGitHub()).toBe('avaswe');
  });

  test('gets the role', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});