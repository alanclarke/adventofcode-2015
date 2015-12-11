const mine = require('./mine')
const input = require('./input')

module.exports = {
  five: () => mine(input),
  six: () => mine(input, 6)
}
