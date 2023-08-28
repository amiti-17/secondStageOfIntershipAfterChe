import regExp from "../../config/system/regExp";
import constants from "../../config/system/constants";

export default function addSuitablePlus(string) {
  const someCaseRegExp = new RegExp(
    regExp.insertPlusBeforeMinusButNotZeroPos, [regExp.flags.global, regExp.flags.dotAll].join(constants.emptyStr.str)
    )
  return string.replace(someCaseRegExp, constants.plus.str + constants.minus.str);
}