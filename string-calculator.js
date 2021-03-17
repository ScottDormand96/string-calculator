const parser = require('./parser')

module.exports = function calculator (stringNumber) {
  if (stringNumber === '') {
    return 0
  }

  const { delimiter, calculationString } = parser(stringNumber)

  const summer = (accumlator, number) => {
    const parseNumber = parseInt(number)

    if (isNaN(parseNumber)) {
      throw new Error('Error: Invalid parameter (the calculation parameter should contain only numbers).')
    }

    return accumlator + parseInt(number)
  }

  const splitNumberList = calculationString.split(delimiter)
  return splitNumberList.reduce(summer, 0)
}
