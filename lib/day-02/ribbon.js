module.exports = function ribbon (l, w, h) {
  var smallest = [l, w, h].sort((a, b) => a - b).slice(0, 2)
  return smallest.concat(smallest).reduce(add, 0) + [l, w, h].reduce(multiply, 1)
}

function add (a, b) { return a + b }
function multiply (a, b) { return a * b }
