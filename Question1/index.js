export const reverseString = str => (
  str.split('').reverse().join('')
);

export const reverseWord = (str) => {
  const words = str.split(' ');
  const reverseWords = words.map(word => (
    word.split('').reverse().join('')
  ));
  return reverseWords.join(' ');
};
