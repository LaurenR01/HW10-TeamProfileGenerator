const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

test('display name', () => {
    const name = 'Steve'
   expect(new Employee(name).name).toBe(name);
})