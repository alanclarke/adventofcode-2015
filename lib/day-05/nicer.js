module.exports = function nice (str) {
  var repeats = /(..).*\1/.test(str)
  var sandwich = /(.).\1/.test(str)
  return repeats && sandwich
}
