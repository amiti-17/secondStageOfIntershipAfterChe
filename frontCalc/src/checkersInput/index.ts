import CustomError from "../config/Errors";
import constants from "../config/system/constants";
import numbers from "../config/system/constants/numbers";
import regExpStr from "../config/system/regExp";
import flags from "../config/system/regExp/flags";
import errorMsg from "../config/Errors/errorMsg";
import addMissingMultipleSymbol from "./addMissingMultiple";
import addSuitablePlus from "./addSuitablePlus";
import removeDuplicateOperands from "./removeDupOper";

export default function checkersInput(value: string) {
  let currentValue = value;

  // set of checkers...

  currentValue = currentValue.replace(new RegExp(regExpStr.allEmptySymbol, flags.global), constants.emptyStr.str);
  currentValue = currentValue.replace(constants.comma.str, constants.dot.str);
  // console.log(currentValue);

  return currentValue;
}