import ResDataType from "./ResDataType";

export default function setResValue(resValue: ResDataType) {
  console.warn(resValue);
  if (resValue.calculated === undefined) {
    // Observable.notifyAll(values.output, numbers.zero.str);
    return;
  } 
  // Observable.notifyAll(values.output, resValue[resValue.length - 1].result);
}