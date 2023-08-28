import simplestOperand from "../../config/project/Operands/basic/simpleOperands";
import regExp from "../../config/system/regExp";
import formatElExp from "../workWithInput";
import basicOperands from "../../config/project/Operands/basic";
import clearAllLetters from "../workWithInput/clearAllLetters";

function parseElExp(exp) {
  const priorSignArr = simplestOperand;
  let currentExpression = clearAllLetters(exp);
  currentExpression = formatElExp(currentExpression);
  for (let i = 0; i <= priorSignArr.length; i++) {
    if(i === priorSignArr.length) return currentExpression;
    const currentMatchRegExp = new RegExp(
      `(?<firstOperand>${regExp.digit})(?<operand>\\${priorSignArr[i]})(?<secondOperand>${regExp.digit})`
    );
    while (currentExpression.match(currentMatchRegExp)) {
      const currentMatch = currentExpression.match(currentMatchRegExp);
      // console.log({currentMatch});
      const { groups } = currentMatch;
      const currentGroupOfOperands = Object.values(basicOperands).reduce((accumObj, opObj) => {
        accumObj[Object.keys(opObj).join('')] = Object.values(opObj)[0];
        return accumObj}
        , {});
      const replacement = currentGroupOfOperands[groups.operand].action(groups.firstOperand, groups.secondOperand);
      currentExpression = currentExpression.replace(currentMatchRegExp, replacement);
    } 
  }

  return currentExpression;
}

export default parseElExp;