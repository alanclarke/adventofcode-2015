/* globals describe it */
const expect = require('chai').expect
const paper = require('../lib/day-02/paper')
const ribbon = require('../lib/day-02/ribbon')
const total = require('../lib/day-02/total')
const parseInput = require('../lib/day-02/parse')
const fixture = require('./fixtures/paper')

describe('paper', () => {
  it('should be 58', () => expect(paper(2, 3, 4)).to.eql(58))

  it('should be 43', () => expect(paper(1, 1, 10)).to.eql(43))
})

describe('parse', () => {
  it('should correctly parse the input', () => expect(parseInput(fixture)).to.eql([
    [29, 13, 26],
    [11, 11, 14],
    [27, 2, 5],
    [6, 10, 13.5]
  ]))
})

describe('ribbon', () => {
  it('should return 34', () => expect(ribbon(2, 3, 4)).to.eql(34))
  it('should return 34', () => expect(ribbon(4, 3, 2)).to.eql(34))
  it('should return 34', () => expect(ribbon(4, 2, 3)).to.eql(34))
  it('should return 14', () => expect(ribbon(1, 1, 10)).to.eql(14))
  it('should return 14', () => expect(ribbon(10, 1, 1)).to.eql(14))
})

describe('total', () => {
  it('should correctly compute total paper', () => expect(total.paper([
    [2, 3, 4],
    [1, 1, 10]
  ])).to.eql(58 + 43))
  it('should correctly compute total ribbon', () => expect(total.ribbon([
    [2, 3, 4],
    [1, 1, 10]
  ])).to.eql(34 + 14))
})
