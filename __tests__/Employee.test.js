const Employee = require('../lib/Employee');

test('New Employee created', () => {
  const Emp = new Employee();
  expect(typeof(Emp)).toBe('object');
});

test('set Employee Name via property', () => {
  const name = 'Tristin Nguyen';
  const Emp = new Employee(name);
  expect(Emp.name).toBe(name);
});

test('get employee name via getName() method', () =>{
  const name = 'Tristin Nguyen';
  const Emp = new Employee(name);
  expect(Emp.getName()).toBe(name);
})

test('set Employee id via property', () => {
  const name = 'Tristin Nguyen';
  const id = 1;
  const Emp = new Employee(name, id);
  expect(Emp.id).toBe(id);
});

test('get Employee id via getId() method', () => {
  const name = 'Tristin Nguyen';
  const id = 1;
  const Emp = new Employee(name, id);
  expect(Emp.getId()).toBe(id);
});

test('set Employee eMail via property', () => {
  const name = 'Tristin Nguyen';
  const id = 1;
  const email = 'tn@gmail.com'
  const Emp = new Employee(name, id, email);
  expect(Emp.email).toBe(email);
});

test('get Employee eMail via getEmail method', () => {
  const name = 'Tristin Nguyen';
  const id = 1;
  const email = 'tn@gmail.com'
  const Emp = new Employee(name, id, email);
  expect(Emp.email).toBe(email);
});

test('get Employee title via getRole() method', () => {
  const name = 'Tristin Nguyen';
  const Emp = new Employee(name);
  expect(Emp.title).toBe('Employee');
});