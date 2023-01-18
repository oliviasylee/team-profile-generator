const Intern = require('../lib/Intern');
const intern = new Intern('Ava', 3, 'ava@test.com', 'GWU');
describe('Intern class', () => {
  test('gets the name', () => {
    expect(intern.getName()).toEqual('Ava');
  });
  
  test('gets the id', () => {
    expect(intern.getId()).toEqual(3);
  });

  test('gets the Email', () => {
    expect(intern.getEmail()).toEqual('ava@test.com');
  });

  test('gets the school', () => {
    expect(intern.getSchool()).toEqual('GWU');
  });

  test('gets the role', () => {
    expect(intern.getRole()).toEqual('Intern');
  });
});