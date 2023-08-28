import regExp from "../../config/system/regExp";
import parseElExp from "./parseElementaryExp";
import formatElExp from "../workWithInput";
import errorMsg from "../../Errors/errorMsg";
import CustomError from "../../Errors";
import parseSingleOperands from "./parseSingleOperand";

function parseToSubExp(exp) {
  let currentExpression = exp;
  const expInBracketsRegExp = new RegExp(regExp.expressionInBrackets);
  if (new RegExp(regExp.singleOperands).test(currentExpression)) currentExpression = parseSingleOperands(currentExpression);
  while (currentExpression.match(expInBracketsRegExp)) {
    const currentMatch = currentExpression.match(expInBracketsRegExp);
    let replacement = parseElExp(currentMatch.groups.elExp);
    if (currentMatch.groups.extendedOperator) {
      currentExpression = currentExpression.replace(currentMatch.groups.elExp, replacement);
      currentExpression = parseSingleOperands(currentExpression);
    } else {
      currentExpression = currentExpression.replace(expInBracketsRegExp, replacement);
    }
    currentExpression = formatElExp(currentExpression);
    console.log({currentExpression});
  }
  if (new RegExp(regExp.roundBrackets, regExp.flags.global).test(currentExpression)) {
    throw new CustomError(errorMsg.noPairRoundBrackets);
  }
  return parseElExp(currentExpression);
}

export default parseToSubExp;