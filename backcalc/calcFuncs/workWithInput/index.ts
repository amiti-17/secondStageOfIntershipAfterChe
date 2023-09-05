import regExpStr from "../../configCommon/system/regExp";
import regExp from "../../configCommon/system/regExp/regExp";
import flags from "../../configCommon/system/regExp/flags";
import errorMsg from "../../configCommon/Errors/errorMsg";
import addMissingMultipleSymbol from "./addMissingMultiple";
import addSuitablePlus from "./addSuitablePlus";
import removeDuplicateOperands from "./removeDupOper";
import constants from "../../configCommon/system/constants";
import numbers from "../../configCommon/system/constants/numbers";
import ValidationError from "../../configCommon/Errors/ValidationError";

function formatExp(exp: string) {
  let result = exp.replace(new RegExp(regExpStr.allEmptySymbol, flags.global), constants.emptyStr.str);
  result = result.replace(constants.doubleMinus.str, constants.plus.str);
  result = removeDuplicateOperands(result);
  result = addSuitablePlus(result);
  result = addMissingMultipleSymbol(result);
  if (new RegExp(regExpStr.wrongDigit, flags.global).test(exp)) {
    throw new ValidationError(errorMsg.strangeNumbers);
  } else if (result.match(regExp.wrongSingleOperands)) {
    throw new ValidationError(errorMsg.wrongExtendedUsage);
  } else if (result.match(regExp.trailingDot)) {
    console.error(new ValidationError(errorMsg.missingZeroBeforeDot));
    result = result.replace(new RegExp(regExpStr.trailingDot, flags.global), numbers.zero.str + constants.dot.str);
  }
  return result;
}

export default formatExp;