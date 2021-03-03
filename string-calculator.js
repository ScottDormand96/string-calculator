module.exports = function calculator (stringNumber) {
  if (stringNumber === '') {
    return 0
  }

  const summer = (accumlator, number) => {
    const parseNumber = parseInt(number)

    if (isNaN(parseNumber)) {
      throw new Error('Error: Invalid parameter (the calculation parameter should contain only numbers).')
    }

    return accumlator + parseInt(number)
  }

  const splitNumberList = stringNumber.split(/[,\n]/)
  return splitNumberList.reduce(summer, 0)
}
