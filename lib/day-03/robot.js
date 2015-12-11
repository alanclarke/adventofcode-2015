module.exports = function houses (moves) {
  var santa = { x: 0, y: 0 }
  var robo = { x: 0, y: 0 }
  var db = { 0: { 0: 1 } }
  var l = moves.length
  var n = 1
  var i = -1
  while (i++ < l) {
    var dispatcher = i % 2 === 0 ? santa : robo
    if (moves[i] === '<') dispatcher.x--
    if (moves[i] === '>') dispatcher.x++
    if (moves[i] === 'v') dispatcher.y--
    if (moves[i] === '^') dispatcher.y++
    db[dispatcher.x] = db[dispatcher.x] || {}
    if (!db[dispatcher.x][dispatcher.y]) n++
    db[dispatcher.x][dispatcher.y] = 1
  }
  return n
}
