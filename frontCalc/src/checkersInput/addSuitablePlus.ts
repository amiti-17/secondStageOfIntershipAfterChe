import regExpStr from "../config/system/regExp";
import constants from "../config/system/constants";
import flags from "../config/system/regExp/flags";

export default function addSuitablePlus(exp: string) {
  const someCaseRegExp = new RegExp(
    regExpStr.insertPlusBeforeMinusButNotZeroPos, [flags.global, flags.dotAll].join(constants.emptyStr.str)
  )
  return exp.replace(someCaseRegExp, constants.plus.str + constants.minus.str);
}