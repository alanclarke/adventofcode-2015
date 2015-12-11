module.exports = function floors (moves) {
  var i = 0
  var l = moves.length
  while (l--) moves[l] === '(' ? i++ : i--
  return i
}
