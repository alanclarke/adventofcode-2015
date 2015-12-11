const floors = require('./floors')
const basement = require('./basement')
const input = require('./input')

module.exports = {
  floors: () => floors(input),
  basement: () => basement(input)
}
