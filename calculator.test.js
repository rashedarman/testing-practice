const calculator = require('./calculator');

describe('test - add, subtract, divide, and multiply', () => {
  test('Add', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('Subtract', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

  test('Multiply', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });

  test('Divide', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
});
