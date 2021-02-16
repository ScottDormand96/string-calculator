const chai = require('chai')
const expect = chai.expect

function parser (string) {
  if (string.startsWith('//')) {
    // get delimeter
    // split on \n
    // x[0] - //{sep}
    // remove //
    // whatevers left is the delimiter
    // x[1..] would be calc string
  } else {
    // delimeter = default
  }
  //   const matches = string.match(/((\/\/)(.)(\\n))?(.*)/)
  return { delimeter: /[,\n]/, calculationString: string }
}

describe('parser', () => {
  it.skip('supporting different delimiters to change a delimiter', () => {
    // Arrange/Act
    const result = parser('//;\n1;2')

    // Assert
    expect(result).to.eql({ delimeter: /[;]/, calculationString: '1;2' })
  })

  it('string without delimter returns default and calculation string', () => {
    // Arrange/Act
    const result = parser('1,2')

    // Assert
    expect(result).to.eql({ delimeter: /[,\n]/, calculationString: '1,2' })
  })

  it('string with new line returns default and calculation string', () => {
    // Arrange/Act
    const result = parser('1\n2')

    // Assert
    expect(result).to.eql({ delimeter: /[,\n]/, calculationString: '1\n2' })
  })
})
