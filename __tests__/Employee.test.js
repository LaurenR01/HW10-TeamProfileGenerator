const { test, expect } = require('@jest/globals');
const employee = require('~/lib/employee');

test('properly displays roles', () => {
   expect(getRole(answers.managerOfficeNumber("5")).toBe('Manager'))
})