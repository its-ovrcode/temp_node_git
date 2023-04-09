// Synchronus FS
const { readFileSync, writeFileSync } = require('fs')
// fs == file system
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(`
first: ${first}
second: ${second}
`)

writeFileSync(
  './content/result-sync.txt',
  `Here is the result ${first}, ${second},  ${(flag = 'a')}`
)

console.log('Done with this task')
console.log('Starting the next one')
