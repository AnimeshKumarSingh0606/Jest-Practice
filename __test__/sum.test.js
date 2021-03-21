import sum from '../src/sum';

describe('testing sum function', () => {
  
  test('1 + 2 is equal to 3', () => expect(sum(1, 2)).toBe(3));
  
  test('2 + 2 is equal to 4', () => expect(sum(2, 2)).toMatchSnapshot());
});
