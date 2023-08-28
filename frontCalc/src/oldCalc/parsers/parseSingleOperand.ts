import CustomError from "../../config/Errors";
import errorMsg from "../../config/Errors/errorMsg";
import extendedForCalc from "../../config/project/Operands/extended/extendedForCalc";
import regExp from "../../config/system/regExp/regExp";


export default function parseSingleOperands(exp: string) {
  let currentExpression = exp;
  const currentRegExp = regExp.singleOperands;
  const currentMatch = exp.match(currentRegExp);
  if (currentMatch === null) throw new CustomError(errorMsg.noPairRoundBrackets);
  if (!currentMatch.groups) throw new CustomError(errorMsg.noPairRoundBrackets);
  const groups = currentMatch.groups;
  if (!groups.digit) throw new CustomError(errorMsg.noPairRoundBrackets);
  if (!extendedForCalc) throw new CustomError(errorMsg.noPairRoundBrackets);
  if (!extendedForCalc[groups.extendedOperator]) throw new CustomError(errorMsg.noPairRoundBrackets);
  if (!groups.extendedOperator) throw new CustomError(errorMsg.noPairRoundBrackets);
  if (!extendedForCalc[groups.extendedOperator]) throw new CustomError(errorMsg.noPairRoundBrackets);
  const myFunc = extendedForCalc[groups.extendedOperator].action?.bind(null);
  // if (extendedForCalc[groups.extendedOperator].action) extendedForCalc[groups.extendedOperator].action('8');
  if (!myFunc) throw new CustomError(errorMsg.noPairRoundBrackets);
  currentExpression = currentExpression.replace(currentRegExp, 
    String(myFunc(groups.digit)));
  return currentExpression;
}