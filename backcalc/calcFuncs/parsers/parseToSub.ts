import regExpStr from "../../configCommon/system/regExp";
import parseElExp from "./parseElementaryExp";
import formatElExp from "../workWithInput";
import CustomError from "../../configCommon/Errors";
import errorMsg from "../../configCommon/Errors/errorMsg";
import parseSingleOperands from "./parseSingleOperand";
import flags from "../../configCommon/system/regExp/flags";
import regExp from "../../configCommon/system/regExp/regExp";

function parseToSubExp(exp: string) {
  let currentExpression = exp;
  const expInBracketsRegExp = regExp.expressionInBrackets;
  if (regExp.singleOperands.test(currentExpression)) currentExpression = parseSingleOperands(currentExpression);
  let currentMatch = currentExpression.match(expInBracketsRegExp);
  while (currentMatch) {
    if (currentMatch.groups?.elExp === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
    const replacement = parseElExp(currentMatch.groups?.elExp);
    if (currentMatch.groups?.extendedOperator) {
      currentExpression = currentExpression.replace(currentMatch.groups.elExp, replacement);
      currentExpression = parseSingleOperands(currentExpression);
    } else {
      currentExpression = currentExpression.replace(expInBracketsRegExp, replacement);
    }
    currentExpression = formatElExp(currentExpression);
    console.log({currentExpression});
    currentMatch = currentExpression.match(expInBracketsRegExp);
  }
  if (new RegExp(regExpStr.roundBrackets, flags.global).test(currentExpression)) {
    throw new CustomError(errorMsg.noPairRoundBrackets);
  }
  return parseElExp(currentExpression);
}

export default parseToSubExp;