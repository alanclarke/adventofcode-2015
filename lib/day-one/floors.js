module.exports = function floors (moves) {
  var i = 0, l = moves.length
  while (l--) moves[l] === '(' ? i++ : i--
  return i
}
