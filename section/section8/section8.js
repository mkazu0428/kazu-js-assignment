const firstIndex = (array) => {
  return array[0];
};
const countArrayLength = (array) => {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      return "この配列は空配列です";
    } else {
      return `この配列は${array.length}個のデータを持っています`;
    }
  } else {
    return "これは配列ではありません";
  }
};

const extractArray = (array) => {
  return array.slice(1, 3);
};

const makeMark = (mark, number) => {
  const newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(mark);
  }
  return newArray;
};

const onlyString = (array) => {
  const stringArray = array.filter((currentValue, index, array) => {
    return typeof currentValue === "string";
  });
  return stringArray;
};

const addNumber = (array) => {
  numberAddedArray = [];
  array.forEach((currentValue, index, array) => {
    numberAddedArray.push(`${index + 1}: ${currentValue}`);
  });
  return numberAddedArray;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
