module.exports = function paper (l, w, h) {
  var sides = [l * w, w * h, h * l]
  var slack = Math.min.apply(Math, sides)
  return sides.reduce(addDouble, 0) + slack
  function addDouble (a, b) {
    return a + (b * 2)
  }
}
