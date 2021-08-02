const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

test('display name', () => {
    const name = 'Steve'
   expect(new Engineer(name).name).toBe(name);
})