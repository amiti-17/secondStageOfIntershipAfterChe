interface RegExpType {
  [key: string]: string;
}

const regExpStr: RegExpType = {
  digit: `-?\\d+(\\.\\d+)?`,
  wrongDigit: `((-?\\d+\\.\\d*)(\\d*\\.+\\d*)+(\\d*\\.*)*)|(-?\\d\\.[^\\d])`,
  isFractionDigit: `-?\\d+\\.`,
  word: `(?=(\\w+))\\1`,
  funcOperand: `\\w{2,4}\\(` || `(?<=(?<func>\\w{2,4}))\\(`,
  smallPart: `(?<=\\.)(?<smallPart>\\d+)`,
  allEmptySymbol: `\\s+`,
  partOfNumber: `[\\d\\.-]`,
  roundBrackets: "[\\(\\)]",
  allowedWithCtrlKey: "[zxcvy]",
  engSymbol: '[a-z|A-Z]',
}

export default regExpStr;