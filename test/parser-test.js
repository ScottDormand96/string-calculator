const chai = require('chai')
const expect = chai.expect
const parser = require('../parser')

describe('parser', () => {
  it('supporting different delimiters to change a delimiter', () => {
    // Arrange/Act
    const result = parser('//;\n1;2')

    // Assert
    expect(result).to.eql({ delimiter: /[;]/, calculationString: '1;2' })
  })

  it('string without delimter returns default and calculation string', () => {
    // Arrange/Act
    const result = parser('1,2')

    // Assert
    expect(result).to.eql({ delimiter: /[,\n]/, calculationString: '1,2' })
  })

  it('string with new line returns default and calculation string', () => {
    // Arrange/Act
    const result = parser('1\n2')

    // Assert
    expect(result).to.eql({ delimiter: /[,\n]/, calculationString: '1\n2' })
  })
})
