const Engineer = require('../lib/Engineer');
describe('Engineer', () => {
  test('gets the name', () => {
    const engineer = new Engineer('Olivia', 13, 'oliviasylee@gmail.com', 'oliviasylee');
    expect(engineer.getName()).toBe('Olivia');
  });
  
  test('gets the id', () => {
    const engineer = new Engineer('Olivia', 13, 'oliviasylee@gmail.com', 'oliviasylee');
    expect(engineer.getId()).toBe(13);
  });

  test('gets the Email', () => {
    const engineer = new Engineer('Olivia', 13, 'oliviasylee@gmail.com', 'oliviasylee');
    expect(engineer.getEmail()).toBe('oliviasylee@gmail.com');
  });

  test('gets the gitHub account', () => {
    const engineer = new Engineer('Olivia', 13, 'oliviasylee@gmail.com', 'oliviasylee');
    expect(engineer.getGitHub()).toBe('oliviasylee');
  });

  test('gets the role', () => {
    const engineer = new Engineer('Olivia', 13, 'oliviasylee@gmail.com', 'oliviasylee');
    expect(engineer.getRole()).toBe('Engineer');
  });
});