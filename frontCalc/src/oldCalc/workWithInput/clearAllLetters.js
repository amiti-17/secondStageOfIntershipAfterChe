import regExp from "../../config/system/regExp";
import constants from "../../config/system/constants/"

export default function clearAllLetters(exp) {
  const currentRegExp = new RegExp(`${regExp.engSymbol}|${regExp.allEmptySymbol}`, regExp.flags.global);
  return exp.replace(currentRegExp, constants.emptyStr.str);
}