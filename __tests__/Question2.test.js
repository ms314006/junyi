import { filterNumber, } from '../Question2';

describe('Question2', () => {

  test('filterNumber', () => {
    const expected = 9;

    const actual = filterNumber(15);

    expect(actual).toBe(expected);
  });

});
