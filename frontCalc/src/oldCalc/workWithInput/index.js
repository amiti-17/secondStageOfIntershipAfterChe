import regExp from "../../config/system/regExp";
import errorMsg from "../../Errors/errorMsg";
import addMissingMultipleSymbol from "./addMissingMultiple";
import addSuitablePlus from "./addSuitablePlus";
import CustomError from "../../Errors";
import constants from "../../config/system/constants";
import removeDuplicateOperands from "./removeDupOper";
import numbers from "../../config/system/constants/numbers";

function formatElExp(exp) {
  const flags = regExp.flags;
  let result = exp.replace(new RegExp(regExp.allEmptySymbol, regExp.flags.global), '');
  result = result.replace(constants.comma.str, constants.str);
  result = result.replace(constants.doubleMinus.str, constants.plus.str);
  result = removeDuplicateOperands(result);
  result = addSuitablePlus(result);
  result = addMissingMultipleSymbol(result);
  if (new RegExp(regExp.wrongDigit, flags.global).test(exp)) {
    throw new CustomError(errorMsg.strangeNumbers);
  } else if (result.match(new RegExp(regExp.wrongSingleOperands))) {
    throw new CustomError(errorMsg.wrongExtendedUsage);
  } else if (result.match(new RegExp(regExp.trailingDot))) {
    console.error(new CustomError(errorMsg.missingZeroBeforeDot));
    result = result.replace(new RegExp(regExp.trailingDot, regExp.flags.global), numbers.zero.str + constants.dot.str);
  }
  return result;
}

export default formatElExp;