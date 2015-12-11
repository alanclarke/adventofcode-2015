/* globals describe it */
const expect = require('chai').expect
const houses = require('../lib/day-03/houses')
const robot = require('../lib/day-03/robot')

describe('houses', () => {
  it('should be 2', () => {
    expect(houses('>')).to.eql(2)
  })
  it('should be 4', () => {
    expect(houses('^>v<')).to.eql(4)
  })
  it('should be 2', function () {
    expect(houses('^v^v^v^v^v')).to.eql(2)
  })
})

describe('robot', () => {
  it('should be 3', () => {
    expect(robot('^v')).to.eql(3)
  })
  it('should be 3', () => {
    expect(robot('^>v<')).to.eql(3)
  })
  it('should be 1', function () {
    expect(robot('^v^v^v^v^v')).to.eql(11)
  })
})
