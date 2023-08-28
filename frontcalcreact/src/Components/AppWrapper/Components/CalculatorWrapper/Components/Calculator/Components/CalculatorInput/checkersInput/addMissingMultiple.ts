import constants from "@/config/system/constants";
import flags from "@/config/system/regExp/flags";
import regExpStr from "@/config/system/regExp/regExpStr";

export default function addMissingMultipleSymbol(str: string): string {
  return str.replace(new RegExp(regExpStr.missingMultipleSymbol, flags.global), constants.multiple.str);
}
