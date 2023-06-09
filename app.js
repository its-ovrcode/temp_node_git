// NPM - node package manager

// local dependency - use it only in this particualr project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4, 'Four', [5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

const person = {
  name: 'Bob',
  age: 20,
}

const newPerson = _.clone(person)
newPerson.name = 'Alice'
console.log(person)
console.log(newPerson)
