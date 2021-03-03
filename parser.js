module.exports = function parser (string) {
  return (string.startsWith('//'))
    ? { delimiter: RegExp(`[${string.charAt(2)}]`), calculationString: string.substring(4) }
    : { delimiter: /[,\n]/, calculationString: string }
}
