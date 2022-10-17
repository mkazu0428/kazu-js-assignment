const sum = (a, b) => {
  let x = Math.min(a, b);
  let y = Math.max(a, b);
  let result = 0;
  for (let i = x; i <= y; i++) {
    result = result + i;
  }
  return result;
};

module.exports = { sum };
