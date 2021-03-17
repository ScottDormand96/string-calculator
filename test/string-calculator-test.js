const chai = require('chai')
const expect = chai.expect
const calculator = require('../string-calculator')

describe('calculator', () => {
  it('empty string should return 0', () => {
  // Arrange/Act
    const result = calculator('')

    // Assert
    expect(result).to.equal(0)
  })

  it('single digit string should return the number', () => {
    // Arrange/Act
    const result = calculator('1')

    // Assert
    expect(result).to.equal(1)
  })

  it('two digits string should return the sum', () => {
    // Arrange/Act
    const result = calculator('1,2')

    // Assert
    expect(result).to.equal(3)
  })

  it('multiple digits string should return the sum', () => {
    // Arrange/Act
    const result = calculator('1,2,3')

    // Assert
    expect(result).to.equal(6)
  })

  it('new lines or commas string should return the sum', () => {
    // Arrange/Act
    const result = calculator('1\n2,3')

    // Assert
    expect(result).to.equal(6)
  })

  it('integer and string calculation', () => {
    // Arrange/Act
    const wrappedCalc = function () { return calculator('1,A') }

    // Assert
    expect(wrappedCalc).to.throw('Error: Invalid parameter (the calculation parameter should contain only numbers).')
  })

  it('calculator with non default delimeter', () => {
    // Arrange/Act
    const result = calculator('//;\n1;2')

    // Assert
    expect(result).to.equal(3)
  })
})
