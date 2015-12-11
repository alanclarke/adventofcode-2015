/* globals describe it */
const expect = require('chai').expect
const mine = require('../lib/day-04/mine')

describe.skip('mining', function () {
  this.timeout(10000)
  it('should be 609043', () => {
    expect(mine('abcdef')).to.eql(609043)
  })
  it('should be 1048970', () => {
    expect(mine('pqrstuv')).to.eql(1048970)
  })
})
