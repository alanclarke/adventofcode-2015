module.exports = function nice (str) {
  var banned = !/(ab|cd|pq|xy)/.test(str)
  var repeats = /(.)\1{1}/.test(str)
  var vowels = /(.*[aeiou].*){3}/.test(str)
  return banned && repeats && vowels
}
