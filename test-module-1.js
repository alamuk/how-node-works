// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//
//   divide(a, b) {
//     return a / b;
//   }
// }

// one single module export
// module.exports = Calculator;

//// ------------------/////

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
