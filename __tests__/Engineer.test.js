const Engineer = require('../lib/Engineer');

test('get title via getRole() method', () => {
const title = 'Engineer';
const name = 'Eric Cartman';
const Eng = new Engineer(name);
expect(Eng.getRole()).toBe(title);
});

test('set github acct via property', () => {
  const github = 'ec-github';
  const name = 'Eric Cartman';
  const id = 1;
  const email = 'ec@gmail.com';
  const Eng = new Engineer(name, id, email, github);
  expect(Eng.github).toBe(github);
});

test('get github via getGithub() method', () => {
  const github = 'ec-github';
  const name = 'Eric Cartman';
  const id = 1;
  const email = 'ec@gmail.com';
  const Eng = new Engineer(name, id, email, github);
  expect(Eng.getGithub()).toBe(github);
});