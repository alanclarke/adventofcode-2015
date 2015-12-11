module.exports = function paper (l, w, h) {
  var sides = [l * w, w * h, h * l]
  var slack = Math.min.apply(Math, sides)
  return sides.reduce((a, b) => a + (b * 2), 0) + slack
}
