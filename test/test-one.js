var expect = require('chai').expect
var floors = require('../lib/day-one/floors')
var basement = require('../lib/day-one/basement')

describe('floors', function () {
  it('should be 0', function () {
    expect(floors('(())')).to.eql(0)
    expect(floors('()()')).to.eql(0)
  })

  it('should be 3', function () {
    expect(floors('(((')).to.eql(3)
    expect(floors('(()(()(')).to.eql(3)
    expect(floors('))(((((')).to.eql(3)
  })

  it('should be -1', function () {
    expect(floors('())')).to.eql(-1)
    expect(floors('))(')).to.eql(-1)
  })

  it('should be -3', function () {
    expect(floors(')))')).to.eql(-3)
    expect(floors(')())())')).to.eql(-3)
  })
})

describe('basement', function () {
  it('should be 1', function () {
    expect(basement(')')).to.eql(1)
  })

  it('should be 5', function () {
    expect(basement('()())')).to.eql(5)
  })
})
