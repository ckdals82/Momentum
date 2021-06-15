function sayHello(nameOfPerson, age) {
  console.log(nameOfPerson);
}

sayHello("창민", 29);
sayHello("택윤", 29);
sayHello("상윤", 36);
sayHello("기덕", 46);

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },

  minus: function (a, b) {
    console.log(a - b);
  },

  gop: function (a, b) {
    console.log(a * b);
  },

  divide: function (a, b) {
    console.log(a / b);
  },
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.gop(5, 1);
calculator.divide(5, 1);
