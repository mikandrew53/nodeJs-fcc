// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-first-module-names');
const sayHi = require('./5-second-module-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-gernade')

console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);