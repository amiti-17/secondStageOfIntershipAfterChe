import regExp from "../../config/system/regExp";

export default function removeDuplicateOperands(str) {
  const duplicateOperandsRegExp = new RegExp(regExp.duplicateOperands, regExp.flags.global);
  return str.replace(duplicateOperandsRegExp, '$1');
}