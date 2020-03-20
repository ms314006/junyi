export const filterNumber = (number) => {
  let count = 0;
  for(let i = 1; i <= number; i += 1) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      count += 1;
    }

    if (i % 15 === 0) {
      count += 1;
    }
  }
  return count;
};
