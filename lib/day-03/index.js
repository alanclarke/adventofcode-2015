const houses = require('./houses')
const robot = require('./robot')
const input = require('./input')

module.exports = {
  houses: () => houses(input),
  robot: () => robot(input)
}
