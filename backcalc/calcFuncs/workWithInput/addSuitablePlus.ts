import regExpStr from "../../configCommon/system/regExp";
import constants from "../../configCommon/system/constants";
import flags from "../../configCommon/system/regExp/flags";

export default function addSuitablePlus(exp: string) {
  const someCaseRegExp = new RegExp(
    regExpStr.insertPlusBeforeMinusButNotZeroPos, [flags.global, flags.dotAll].join(constants.emptyStr.str)
  )
  return exp.replace(someCaseRegExp, constants.plus.str + constants.minus.str);
}