const Engineer = require('../lib/Engineer');

test('get title via getRole() method', () => {
const title = 'Engineer';
const name = 'Hermione Grander';
const Eng = new Engineer(name);
expect(Eng.getRole()).toBe(title);
});

test('set github acct via property', () => {
  const github = 'ec-github';
  const name = 'Hermione Grander';
  const id = 1;
  const email = 'hg@gmail.com';
  const Eng = new Engineer(name, id, email, github);
  expect(Eng.github).toBe(github);
});

test('get github via getGithub() method', () => {
  const github = 'ec-github';
  const name = 'Hermione Grander';
  const id = 1;
  const email = 'hg@gmail.com';
  const Eng = new Engineer(name, id, email, github);
  expect(Eng.getGithub()).toBe(github);
});