const Intern = require('../lib/Intern');

test('get title via getRole() method', () => {
const title = 'Intern';
const name = 'Eric Cartman';
const Int = new Intern(name);
expect(Int.getRole()).toBe(title);
});

test('set school acct via property', () => {
  const school = 'Hard Knocks';
  const name = 'Eric Cartman';
  const id = 1;
  const email = 'ec@gmail.com';
  const Int = new Intern(name, id, email, school);
  expect(Int.school).toBe(school);
});

test('get school via getSchool() method', () => {
  const school = 'Hard Knocks';
  const name = 'Eric Cartman';
  const id = 1;
  const email = 'ec@gmail.com';
  const Int = new Intern(name, id, email, school);
  expect(Int.getSchool()).toBe(school);
});