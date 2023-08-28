interface ErrorMsgType {
  [key: string]: string;
}

const errorMsg: ErrorMsgType = {
  noPairRoundBrackets: 'No open or closing round Brackets',
  strangeNumbers: 'Wrong format for numbers',
  changeValueInConfig: 'Don`t change value in config',
  wrongExtendedUsage: 'Missing open round brackets after extended operand',
  expIsUndefined: 'expression in some place evaluate as undefined',
  missingZeroBeforeDot: 'spot numbers like [^\\d]\\.\\d',
  noElementFieldHere: 'Here no element, don`t touch it, probably u use this on null',
  unknownError: 'was thrown unknown error from code above',
  emptyExpression: 'expression is empty, it will replace with zero',
  errorInFetchHistory: "incorrect usage of fetchHistory",
}

export default errorMsg;