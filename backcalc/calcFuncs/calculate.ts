import constants from "../configCommon/system/constants/";
import numbers from "../configCommon/system/constants/numbers";
import formatExp from "./workWithInput";
import parseToSubExp from "./parsers/parseToSubExp";
import CustomError from "../configCommon/Errors";
import errorMsg from "../configCommon/Errors/errorMsg";

export default function calculate(expression: string) {
  if (expression === constants.emptyStr.str) {
    return numbers.zero.str;
  }
  const formattedInputExp = formatExp(expression);
  const calculatedExp = parseToSubExp(formattedInputExp);
  if (expression === constants.emptyStr.str) {
    return constants.invalidFormat.str;
  }
  console.log(calculatedExp);
  try {
    const returnedValue = String(Number(calculatedExp));
      console.error("divine by zero...", returnedValue, constants.infinity.str)
    if (returnedValue === constants.infinity.str) {
      throw new CustomError(errorMsg.returnedValueIsNotNumber);
    }
    return returnedValue;
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) {
      throw new CustomError(errorMsg.returnedValueIsNotNumber);
    }
  }
  return calculatedExp;
}

// function getTwoOperandsAndCharObj(regExpObj) {
//   const lFlags = regExp.flags;
//   const digitRegExp = new RegExp(regExp.digit, lFlags.sticky);
//   digitRegExp.lastIndex = regExpObj.index + 1;
//   const currentExpression = regExpObj.input;
//   const leftOperand = getLeftOperand(currentExpression, regExpObj.index);
//   const rightOperandObj = digitRegExp.exec(currentExpression);
//   console.log(rightOperand);
//   return {
//     leftOperand: leftOperand,
//     rightOperand: rightOperandObj[0],
//     char: regExpObj[0],
//   }
// }

// function getLeftOperand(exp, index) {
//   const isPartOfNumberRegExp = new RegExp(regExp.partOfNumber);
//   for (let i = index - 1; i >= -1; i--) {
//     if (isPartOfNumberRegExp.test(exp[i])) {
//       continue;
//     } else {
//       return exp.slice(i + 1, index);
//     }
//   }
// }

// function parseElExp(exp) {
//   const currentExpression = formatElExp(exp);
//   const priorSignArr = [ '*', '/', '+'];
//   for (let i = 0; i <= priorSignArr.length; i++) {
//     if(i === priorSignArr.length) return currentExpression;
//     const currentSignIndex = currentExpression.indexOf(priorSignArr[i]);
//     if (currentSignIndex == -1) {
//       continue;
//     } else {
//       const newExpressionsIndexStart = getLeftOperand(currentExpression, currentSignIndex);
//       const newExpressionsIndexEnd = getRightOperand(currentExpression, currentSignIndex);
//       const newExpressionsFirstOperand = currentExpression.slice(newExpressionsIndexStart, currentSignIndex);
//       const newExpressionsSecondOperand = currentExpression.slice(currentSignIndex + 1, newExpressionsIndexEnd + 1);
//       const calculatedValue = operand[priorSignArr[i]](newExpressionsFirstOperand, newExpressionsSecondOperand);
//       const newCurrentExpression = (
//         currentExpression.slice(0, newExpressionsIndexStart)
//         + calculatedValue
//         + currentExpression.slice(newExpressionsIndexEnd + 1, )
//         );
//        return parseElExp(newCurrentExpression);
//     }
//   }
// }

// function parseToSubExp(exp) {
//   const currentExpression = exp;
//   const priorSignArr = [')'];
//   for (let i = 0; i <= priorSignArr.length; i++) {
//     if (i === priorSignArr.length) return parseElExp(currentExpression);
//     const currentSignIndex = currentExpression.indexOf(priorSignArr[i]);
//     if (currentSignIndex === -1) {
//       continue;
//     } else {
//       const startSignIndex = findOpeningRoundBracket(currentExpression, currentSignIndex);
//       if (startSignIndex === -1) return "";
//       const calculatedSubExpression = parseElExp(currentExpression.slice(startSignIndex + 1, currentSignIndex));
//       const newCurrentExpression = (
//         currentExpression.slice(0, startSignIndex)
//         + calculatedSubExpression
//         + currentExpression.slice(currentSignIndex + 1, )
//       );
//       return parseToSubExp(newCurrentExpression);
//     }
//   }
// }

// function findOpeningRoundBracket(currentExpression, indexOfClosingRoundBracket) {
//   let i = indexOfClosingRoundBracket -1;
//   while (i > -1) {
//     if (currentExpression[i] === "(") break;
//     i -= 1;
//   }
//   return i;
// }

// function getLeftOperand(expressionStr, indexOfSign) {
//   let currentIndex = indexOfSign;
//   while (currentIndex > 0) {
//     currentIndex -= 1;
//     if (!isItPartOfNumber(expressionStr[currentIndex])) return currentIndex + 1;
//   }
//   return currentIndex;
// }

// function getRightOperand(expressionStr, indexOfSign) {
//   let currentIndex = indexOfSign;
//   while (currentIndex < expressionStr.length) {
//     currentIndex += 1;
//     if (!isItPartOfNumber(expressionStr[currentIndex])) return currentIndex - 1;
//   }
//   return currentIndex;
// }

// function isItPartOfNumber(char) {
//   const forbiddenSymbol = ['+', '/', '*', undefined, '(', ')']
//   let a = char === '.';
//   let b = char === '-';
//   let c = isNumber(Number(char));
//   if (forbiddenSymbol.indexOf(char) + 1) return false;
//   if (a || b || c) return true;
//   return false;
// }
