const md5 = require('md5')

module.exports = function mine (secret, zeros) {
  var result
  var i = -1
  do { result = md5(secret + ++i) } while (!valid(result, zeros))
  return i
}

function valid (str, zeros) {
  return (str || '').indexOf(Array(zeros || 5).fill('0').join('')) === 0
}
