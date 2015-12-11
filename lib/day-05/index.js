const nice = require('./nice')
const nicer = require('./nicer')
const counter = require('./counter')
const input = require('./input')

module.exports = {
  nice: () => counter(input.split('\n'), nice),
  nicer: () => counter(input.split('\n'), nicer)
}
