module.exports = function parseInput (val) {
  return val.split('\n').map(split)
}

function split (str) {
  return str.split('x').map(Number)
}
