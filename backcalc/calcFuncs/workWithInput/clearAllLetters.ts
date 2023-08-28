import regExpStr from "../../configCommon/system/regExp";
import constants from "../../configCommon/system/constants/";
import flags from "../../configCommon/system/regExp/flags";

export default function clearAllLetters(exp: string) {
  const currentRegExp = new RegExp(`${regExpStr.engSymbol}|${regExpStr.allEmptySymbol}`, flags.global);
  return exp.replace(currentRegExp, constants.emptyStr.str);
}