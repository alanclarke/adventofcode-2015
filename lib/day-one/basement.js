module.exports = function basement (moves) {
  var l = moves.length, n = 0, i = 0
  while (n < l) {
    moves[n] === '(' ? i++ : i--
    n++
    if (i === -1) return n
  }
}
