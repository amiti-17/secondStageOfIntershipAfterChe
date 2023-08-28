import constants from "@/config/system/constants";
import flags from "@/config/system/regExp/flags";
import regExpStr from "@/config/system/regExp/regExpStr";

export default function checkersInput(value: string) {
  let currentValue = value;

  // set of checkers...

  currentValue = currentValue.replace(new RegExp(regExpStr.allEmptySymbol, flags.global), constants.emptyStr.str);
  currentValue = currentValue.replace(constants.comma.str, constants.dot.str);
  // console.log(currentValue);

  return currentValue;
}