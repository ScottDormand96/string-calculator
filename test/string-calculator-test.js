const chai = require('chai')
const expect = chai.expect

function calculator (stringNumber) {
  if (stringNumber === '') {
    return 0
  }

  const splitNumberList = stringNumber.split(',')

  return splitNumberList.reduce((accumlator, number) => accumlator + parseInt(number), 0)
}

describe('string calculator', () => {
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
})
