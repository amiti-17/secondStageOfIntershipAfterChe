import ResDataType from "./ResDataType";
import values from "../Observable/config";
import Observable from "../Observable/universal";
import constants from "../config/system/constants";
import numbers from "../config/system/constants/numbers";

export default function setResValue(resValue: ResDataType) {
  console.warn(resValue);
  if (resValue[0].calc === undefined) {
    Observable.notifyAll(values.output, numbers.zero.str);
    return;
  } 
  Observable.notifyAll(values.output, resValue[resValue.length - 1].result);
}