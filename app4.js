const calculator = {
  add: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  gop: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },
};

const plusResult = calculator.add(5, 1);
const minusResult = calculator.minus(plusResult, 1);
const timeResult = calculator.gop(5, minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
