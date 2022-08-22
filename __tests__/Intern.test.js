const Intern = require('../lib/Intern');

test('get title via getRole() method', () => {
const title = 'Intern';
const name = 'Harry Potter';
const Int = new Intern(name);
expect(Int.getRole()).toBe(title);
});

test('set school acct via property', () => {
  const school = 'Hogwarts';
  const name = 'Harry Potter';
  const id = 1;
  const email = 'hp@gmail.com';
  const Int = new Intern(name, id, email, school);
  expect(Int.school).toBe(school);
});

test('get school via getSchool() method', () => {
  const school = 'Hogwarts';
  const name = 'Harry Potter';
  const id = 1;
  const email = 'hp@gmail.com';
  const Int = new Intern(name, id, email, school);
  expect(Int.getSchool()).toBe(school);
});