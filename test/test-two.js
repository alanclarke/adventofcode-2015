var expect = require('chai').expect
var paper = require('../lib/day-two/paper')
var total = require('../lib/day-two/total')
var parseInput = require('../lib/day-two/parse')
var fixture = require('./fixtures/paper')

describe('paper', function () {
  it('should be 58', function () {
    expect(paper(2, 3, 4)).to.eql(58)
  })

  it('should be 43', function () {
    expect(paper(1, 1, 10)).to.eql(43)
  })
})

describe('parse', function () {
  it('should correctly parse the input', function () {
    expect(parseInput(fixture)).to.eql([
      [29, 13, 26],
      [11, 11, 14],
      [27, 2, 5],
      [6, 10, 13.5]
    ])
  })
})

describe('total', function () {
  it('should correctly parse the input', function () {
    expect(total([
      [2, 3, 4],
      [1, 1, 10]
    ])).to.eql(58 + 43)
  })
})
