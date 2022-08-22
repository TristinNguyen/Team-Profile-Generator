const Manager = require('../lib/Manager');

test('get title via getRole() method', () => {
const title = 'Manager';
const name = 'Ron Weesly';
const Mgr = new Manager(name);
expect(Mgr.getRole()).toBe(title);
});

test('set Office Number via property', () => {
  const office = '1';
  const name = 'Ron Weesly';
  const id = 1;
  const email = 'rw@gmail.com';
  const Mgr = new Manager(name, id, email, office);
  expect(Mgr.officeNumber).toBe(office);
});

test('get office via getOffice() method', () => {
  const office = '1';
  const name = 'Ron Weesly';
  const id = 1;
  const email = 'rw@gmail.com';
  const Mgr = new Manager(name, id, email, office);
  expect(Mgr.getOfficeNumber()).toBe(office);
});