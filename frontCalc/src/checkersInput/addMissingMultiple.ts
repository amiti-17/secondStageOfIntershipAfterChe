import regExpStr from "../config/system/regExp";
import constants from "../config/system/constants";
import flags from "../config/system/regExp/flags";

export default function addMissingMultipleSymbol(str: string): string {
  return str.replace(new RegExp(regExpStr.missingMultipleSymbol, flags.global), constants.multiple.str);
}
