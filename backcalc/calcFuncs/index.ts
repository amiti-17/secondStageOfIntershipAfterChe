import errorMsg from "../configCommon/Errors/errorMsg";
import constants from "../configCommon/system/constants";
import numbers from "../configCommon/system/constants/numbers";
import CustomError from "../configCommon/Errors";
import calculateWithDb from "./calculateWithDb";
import configDB from "../configDB";
import calculate from "./calculate";

async function calculateExp(exp: string) {
  let result: string | undefined;

  if (configDB.mode) {
      result = await calculateWithDb(exp);
  } else {
    result = calculate(exp);
  }

  if (result === undefined) {
    result = constants.invalidFormat.str;
    console.error(new CustomError(errorMsg.expIsUndefined));
  }

  if (result === constants.emptyStr.str) result = numbers.zero.str;

  return result;
}

export default calculateExp;
