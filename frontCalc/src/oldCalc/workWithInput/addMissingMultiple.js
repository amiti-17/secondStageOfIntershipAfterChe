import regExp from "../../config/system/regExp";
import constants from "../../config/system/constants";

export default function addMissingMultipleSymbol(str) {
  return str.replace(new RegExp(regExp.missingMultipleSymbol, regExp.flags.global), constants.multiple.str);
}
