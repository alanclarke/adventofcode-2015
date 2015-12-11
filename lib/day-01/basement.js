module.exports = function basement (moves) {
  var l = moves.length
  var n = 0
  var i = 0
  while (n < l) {
    moves[n] === '(' ? i++ : i--
    n++
    if (i === -1) return n
  }
}
