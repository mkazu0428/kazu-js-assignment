const score = function (x) {
  if (80 <= x && x <= 100) {
    return "合格";
  } else if (60 <= x && x < 80) {
    return "追試";
  } else if (0 <= x && x < 60) {
    return "不合格";
  } else if (x === undefined) {
    return "後日受験";
  } else {
    return "0以上100未満の数字を入れてください";
  }
};

module.exports = { score };
