const parse = require('./parse')
const input = parse(require('./input'))
const total = require('./total')

module.exports = {
  paper: () => total.paper(input),
  ribbon: () => total.ribbon(input)
}
