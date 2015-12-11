module.exports = function parseInput (val) {
  return val.split('\n').map((str) => str.split('x').map(Number))
}
