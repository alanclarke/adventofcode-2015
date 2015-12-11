module.exports = function houses (moves) {
  var db = { 0: { 0: 1 } }
  var position = { x: 0, y: 0 }
  var l = moves.length
  var n = 1
  var i = -1
  while (i++ < l) {
    if (moves[i] === '<') position.x--
    if (moves[i] === '>') position.x++
    if (moves[i] === 'v') position.y--
    if (moves[i] === '^') position.y++
    db[position.x] = db[position.x] || {}
    if (!db[position.x][position.y]) n++
    db[position.x][position.y] = 1
  }
  return n
}
