import CustomError from "../Errors";
import errorMsg from "../Errors/errorMsg";
import numbers from "../system/constants/numbers";
import regExp from "../system/regExp/regExp";

// export function isSymbolInEngAbc (symbolInCodePoint) {
//   const currentRegExp = new RegExp(regExp.engSymbol);
//   return (symbolInCodePoint >= 65 && symbolInCodePoint <= 90
//   || symbolInCodePoint >= 97 && symbolInCodePoint <= 122);
// }

export function round(a: string, b: string, result: number): number {
  const isFractionDigitRegExp = regExp.isFractionDigit;
  const isAIsFraction = isFractionDigitRegExp.test(a);
  const isBIsFraction = isFractionDigitRegExp.test(b);
  const getLengthAfterDotA = isAIsFraction ? howMuchDigitAfterDot(a) : numbers.zero.num;
  const getLengthAfterDotB = isBIsFraction ? howMuchDigitAfterDot(b) : numbers.zero.num;
  return (
    (isAIsFraction || isBIsFraction) && getLengthAfterDotA > getLengthAfterDotB
    ? roundToSomeAmountAfterDot(result, getLengthAfterDotA)
    : roundToSomeAmountAfterDot(result, getLengthAfterDotB)
  )
}

export function howMuchDigitAfterDot(fraction: string | number): number {
  const fractionStr = String(fraction);
  const newSmallPartRegExp = regExp.smallPart;
  const smallPartMatched = fractionStr.match(newSmallPartRegExp);
  if (smallPartMatched === null) throw new CustomError(errorMsg.currentMatchIsNull);
  if (smallPartMatched.groups === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
  return Number(smallPartMatched.groups.smallPart.length);
}

export function roundToSomeAmountAfterDot(number: number, someAmount: number) {
  return Math.round(number * 10**someAmount) / 10**someAmount;
}