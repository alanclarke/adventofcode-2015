var paper = require('./paper')
module.exports = function total (arr) {
  return arr.map(applyPaper).reduce(add, 0)
}

function applyPaper () {
  return paper.apply(null, arguments[0])
}

function add (a, b) {
  return a + b
}
