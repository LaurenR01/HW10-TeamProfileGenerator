const { test, expect } = require('@jest/globals');
const Intern = require('../lib/intern');

test('display name', () => {
    const name = 'Steve'
   expect(new Intern(name).name).toBe(name);
})