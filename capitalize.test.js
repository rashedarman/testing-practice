const capitalize = require('./capitalize');

test('capitalize first character of given string', () => {
  expect(capitalize('rashed')).toBe('Rashed');
});
