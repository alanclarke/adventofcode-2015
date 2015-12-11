/* globals describe it */
const expect = require('chai').expect
const floors = require('../lib/day-01/floors')
const basement = require('../lib/day-01/basement')

describe('floors', () => {
  it('should be 0', () => {
    expect(floors('(())')).to.eql(0)
    expect(floors('()()')).to.eql(0)
  })

  it('should be 3', () => {
    expect(floors('(((')).to.eql(3)
    expect(floors('(()(()(')).to.eql(3)
    expect(floors('))(((((')).to.eql(3)
  })

  it('should be -1', () => {
    expect(floors('())')).to.eql(-1)
    expect(floors('))(')).to.eql(-1)
  })

  it('should be -3', () => {
    expect(floors(')))')).to.eql(-3)
    expect(floors(')())())')).to.eql(-3)
  })
})

describe('basement', () => {
  it('should be 1', () => expect(basement(')')).to.eql(1))

  it('should be 5', () => expect(basement('()())')).to.eql(5))
})
