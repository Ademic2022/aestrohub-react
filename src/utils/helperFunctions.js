export const numberFormatter = (num) => {
  if (num >= 1 && num <= 9) {
    return `0${num}`;
  }
  return num;
};
