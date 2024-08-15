// console.log(arguments);
// console.log(require('module').wrapper);

// ------ when we use - - module.exports----  module-1//
/// we can put any name here to import the file
// const C = require('./test-module-1');
// const calc1 = new C();             # important
// console.log(calc1.add(2, 5));
// console.log(calc1.multiply(5, 8));

// --- exports ---- /
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 5));

//----- we can also destructuring this module object ------- module-2 //
// const { add, multiply, divide } = require('./test-module-2');
// console.log(add(2, 8));
// console.log(multiply(2, 8));
const { multiply } = require('./test-module-2'); // we can also import what we need by destructuring only item
console.log(multiply(5, 5));

// ---- directly module import and call straightway () -----//
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

//NOTE: caching
// this module loaded just once
// then every time calling the function - it shows the exports module from caching
// and that why we can see the first 'Hello from the module' once. as rest is coming from caching.
