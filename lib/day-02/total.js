const paper = require('./paper')
const ribbon = require('./ribbon')

module.exports = { paper: getTotalr(paper), ribbon: getTotalr(ribbon) }

function getTotalr (transform) {
  return (arr) => arr.map((row) => transform.apply(null, row)).reduce(add, 0)
}

function add (a, b) {
  return a + b
}
