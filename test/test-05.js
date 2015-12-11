/* globals describe it */
const expect = require('chai').expect
const nice = require('../lib/day-05/nice')
const nicer = require('../lib/day-05/nicer')
const counter = require('../lib/day-05/counter')

describe('nice', () => {
  it('should be nice if it complies', () => {
    expect(nice('ugknbfddgicrmopn')).to.eql(true)
    expect(nice('aaa')).to.eql(true)
  })
  it('should be naughty if it has no double letter', () => {
    expect(nice('jchzalrnumimnmhp')).to.eql(false)
  })
  it('should be naughty if it contains the string xy', () => {
    expect(nice('haegwjzuvuyypxyu')).to.eql(false)
  })
  it('should be naughty if it contains only one vowel', () => {
    expect(nice('dvszwmarrgswjxmb')).to.eql(false)
  })
})

describe('nicer', () => {
  it('should be nicer if it complies', () => {
    expect(nicer('qjhvhtzxzqqjkmpb')).to.eql(true)
    expect(nicer('xxyxx')).to.eql(true)
  })
  it('should be naughty if it has a pair (tg) but no repeat with a single letter between them', () => {
    expect(nicer('uurcxstgmygtbstg')).to.eql(false)
  })
  it('should be naughty if it has a repeating letter with one between (odo), but no pair that appears twice', () => {
    expect(nicer('ieodomkazucvgmuy')).to.eql(false)
  })
})

describe('counter', () => {
  it('should count', () => {
    expect(counter([
      'ugknbfddgicrmopn',
      'aaa',
      'jchzalrnumimnmhp',
      'haegwjzuvuyypxyu',
      'dvszwmarrgswjxmb'
    ], nice)).to.eql(2)
    expect(counter([
      'qjhvhtzxzqqjkmpb',
      'xxyxx',
      'uurcxstgmygtbstg',
      'ieodomkazucvgmuy'
    ], nicer)).to.eql(2)
  })
})
