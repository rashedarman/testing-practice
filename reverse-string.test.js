const reverseString = require('./reverse-string');

test('take a string as an argument and return it reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});
