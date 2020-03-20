import { reverseString, reverseWord } from '../Question1';

describe('Question1', () => {

  test('reverseString', () => {
    const expected = 'ymedacaiynuj';

    const actual = reverseString('junyiacademy');

    expect(actual).toBe(expected);
  });
  
  test('reverseWord', () => {
    const expected = 'deppilf ssalc moor si tnatropmi';

    const actual = reverseWord('flipped class room is important');

    expect(actual).toBe(expected);
  });

});
