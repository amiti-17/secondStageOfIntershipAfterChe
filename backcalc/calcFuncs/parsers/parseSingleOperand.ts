import CustomError from "../../configCommon/Errors";
import extendedForCalc from "../../configCommon/project/Operands/extended/extendedForCalc";
import regExp from "../../configCommon/system/regExp/regExp";
import errorMsg from "../../configCommon/Errors/errorMsg";


export default function parseSingleOperands(exp: string) {
  let currentExpression = exp;
  const currentRegExp = regExp.singleOperands;
  const currentMatch = exp.match(currentRegExp);
  if (currentMatch === null) throw new CustomError(errorMsg.currentMatchIsNull);
  if (currentMatch.groups === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
  const groups = currentMatch.groups;
  const currentOperandObj = Object.values(extendedForCalc).find(elObj => elObj.str === groups.extendedOperator);
  if (currentOperandObj === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
  const currentAction = currentOperandObj.action?.bind(null);
  if (currentAction === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
  currentExpression = currentExpression.replace(currentRegExp, String(currentAction(groups.digit)));

  return currentExpression;
}
