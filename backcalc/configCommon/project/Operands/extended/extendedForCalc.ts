import extendedOperands from "."
import OperandsType from "../../Constructors/OperandsType";

interface AccumulatorObj {
  [key: string]: OperandsType;
}

const accumulatorObj: AccumulatorObj = {}
const extendedForCalc = extendedOperands.reduce((accumulatorObj, elObj) => {
  const currentKey = Object.keys(elObj)[0];
  accumulatorObj[currentKey] = elObj[currentKey];
  return accumulatorObj;
}, accumulatorObj)


export default extendedForCalc;