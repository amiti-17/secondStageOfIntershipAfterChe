import regExpStr from "../../configCommon/system/regExp";
import constants from "../../configCommon/system/constants";
import flags from "../../configCommon/system/regExp/flags";

export default function addMissingMultipleSymbol(str: string) {
  return str.replace(new RegExp(regExpStr.missingMultipleSymbol, flags.global), constants.multiple.str);
}
