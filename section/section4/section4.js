const echoDiv = function (x, y) {
  const remainder = x % y;
  const quotient = (x - remainder) / y;
  return "商: " + String(quotient) + ", 余り: " + String(remainder);
};

const reply = function (z = "返信なし") {
  return z;
};

module.exports = { echoDiv, reply };
