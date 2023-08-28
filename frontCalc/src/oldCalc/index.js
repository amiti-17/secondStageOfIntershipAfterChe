import calculate from "./calculate";
import values from "../Observable/config";
import errorMsg from "../Errors/errorMsg";
import Observable from "../Observable/universal";
import constants from "../config/system/constants";
import CustomError from "../Errors";
import numbers from "../config/system/constants/numbers";

function calculateExp(exp: string) {
  let result;
  try {
    result = calculate(exp);
  } catch (e: unknown) {
    if (e instanceof CustomError) {
      for (let message of Object.values(errorMsg)) {
        if (message === e.message) {
          result = constants.invalidFormat.str;
          Observable.notifyAll(values.output, result);
          console.error(e);
        }
      }
    } else {
      throw new CustomError(errorMsg.unknownError)
    }
  }
  if (result === undefined) {
    result = constants.invalidFormat.str;
    console.error(new CustomError(errorMsg.expIsUndefined))
  }
  if (result === constants.emptyStr.str) result = numbers.zero.str;
  Observable.notifyAll(values.output, result);
}

export default calculateExp;