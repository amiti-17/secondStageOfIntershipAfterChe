import flags from "@/config/system/regExp/flags";
import regExpStr from "@/config/system/regExp/regExpStr";

export default function removeDuplicateOperands(str: string) {
  const duplicateOperandsRegExp = new RegExp(regExpStr.duplicateOperands, flags.global);
  return str.replace(duplicateOperandsRegExp, '$1');
}