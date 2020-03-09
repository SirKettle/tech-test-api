const { isMultipleOf, getMultiplesCode } = require('./');

describe('isMultipleOf', () => {
  it('should return false if the number is not a multiple of', () => {
    expect(isMultipleOf(3)(1)).toBe(false);
    expect(isMultipleOf(3)(2)).toBe(false);
    expect(isMultipleOf(3)(4)).toBe(false);
    expect(isMultipleOf(3)(5)).toBe(false);
    expect(isMultipleOf(3)(22)).toBe(false);
    expect(isMultipleOf(2)(23)).toBe(false);
    expect(isMultipleOf(7)(9)).toBe(false);
  });

  it('should return true if the number is a multiple of', () => {
    expect(isMultipleOf(3)(3)).toBe(true);
    expect(isMultipleOf(3)(9)).toBe(true);
    expect(isMultipleOf(3)(45)).toBe(true);
    expect(isMultipleOf(1)(1)).toBe(true);
    expect(isMultipleOf(22)(44)).toBe(true);
    expect(isMultipleOf(7)(77)).toBe(true);
    expect(isMultipleOf(8)(64)).toBe(true);
  });
});

describe('getMultiplesCode', () => {
  it('should return "PE" if the value is a multiple of both 3 and 5', () => {
    expect(getMultiplesCode(45)).toBe('PE');
    expect(getMultiplesCode(15)).toBe('PE');
    expect(getMultiplesCode(120)).toBe('PE');
  });

  it('should return "P" if the value is a multiple of 3 (but not 5)', () => {
    expect(getMultiplesCode(3)).toBe('P');
    expect(getMultiplesCode(12)).toBe('P');
    expect(getMultiplesCode(123)).toBe('P');
  });

  it('should return "E" if the value is a multiple of 5 (but not 3)', () => {
    expect(getMultiplesCode(5)).toBe('E');
    expect(getMultiplesCode(20)).toBe('E');
    expect(getMultiplesCode(125)).toBe('E');
  });
});
