import regExpStr from "../../configCommon/system/regExp";
import flags from "../../configCommon/system/regExp/flags";

export default function removeDuplicateOperands(str: string) {
  const duplicateOperandsRegExp = new RegExp(regExpStr.duplicateOperands, flags.global);
  return str.replace(duplicateOperandsRegExp, '$1');
}