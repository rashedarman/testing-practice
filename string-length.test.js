const stringLength = require('./string-length');

test('take a string as an argument and return its characters count', () => {
  expect(stringLength('four')).toBe(4);
  expect(() => stringLength('')).toThrow(Error);
  expect(() => stringLength('longer than 10 chars')).toThrow(Error);
});
