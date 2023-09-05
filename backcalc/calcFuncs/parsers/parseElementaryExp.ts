import simplestOperand from "../../configCommon/project/Operands/basic/simpleOperands";
import regExpStr from "../../configCommon/system/regExp";
import formatElExp from "../workWithInput";
import basicOperands from "../../configCommon/project/Operands/basic";
import clearAllLetters from "../workWithInput/clearAllLetters";
import CustomError from "../../configCommon/Errors";
import errorMsg from "../../configCommon/Errors/errorMsg";

function parseElementaryExp(exp: string) {
  const priorSignArr = simplestOperand;
  let currentExpression = clearAllLetters(exp);
  currentExpression = formatElExp(currentExpression);
  for (let i = 0; i <= priorSignArr.length; i++) {
    if(i === priorSignArr.length) return currentExpression;
    const currentMatchRegExp = new RegExp(
      `(?<firstOperand>${regExpStr.digit})(?<operand>\\${priorSignArr[i]})(?<secondOperand>${regExpStr.digit})`
    );
    while (currentExpression.match(currentMatchRegExp)) {
      const currentMatch = currentExpression.match(currentMatchRegExp);
      // console.log({currentMatch});
      if (!currentMatch?.groups) throw new CustomError(errorMsg.currentValueIsUndefined);
      const { groups } = currentMatch;
      const currentOperandObject = Object.values(basicOperands).find(opObj => Object.values(opObj)[0].str === groups.operand);
      if (currentOperandObject === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
      let currentAction = Object.values(currentOperandObject)[0].action?.bind(null);
      if (currentAction === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
      const replacement = currentAction(groups.firstOperand, groups.secondOperand);
      currentExpression = currentExpression.replace(currentMatchRegExp, String(replacement));
    }
  }
  return currentExpression;
}

export default parseElementaryExp;