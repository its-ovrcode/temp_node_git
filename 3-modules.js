// Built-in Modules

// OS module   <==

// PATH module
// FS module
// HTTP module

// CommonJS, every file is modeule (by default)
// Modules - Encapsulated Code

// To access the names from names.js
const names = require('./4-names')
console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// console.log(data)
// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)
