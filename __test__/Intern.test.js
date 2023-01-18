const Intern = require('../lib/Intern');
describe('Intern', () => {
  test('gets the name', () => {
    const intern = new Intern('Olivia', 15, 'oliviasylee@gmail.com', 'GWU');
    expect(intern.getName()).toBe('Olivia');
  });
  
  test('gets the id', () => {
    const intern = new Intern('Olivia', 15, 'oliviasylee@gmail.com', 'GWU');
    expect(intern.getId()).toBe(15);
  });

  test('gets the Email', () => {
    const intern = new Intern('Olivia', 15, 'oliviasylee@gmail.com', 'GWU');
    expect(intern.getEmail()).toBe('oliviasylee@gmail.com');
  });

  test('gets the school', () => {
    const intern = new Intern('Olivia', 15, 'oliviasylee@gmail.com', 'GWU');
    expect(intern.getSchool()).toBe('GWU');
  });

  test('gets the role', () => {
    const intern = new Intern('Olivia', 15, 'oliviasylee@gmail.com', 'GWU');
    expect(intern.getRole()).toBe('Intern');
  });
});