const { test, expect } = require('@jest/globals');
const Manager = require('../lib/manager');

test('display name', () => {
    const name = 'Steve'
   expect(new Manager(name).name).toBe(name);
})