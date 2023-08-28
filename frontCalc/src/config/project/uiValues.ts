import constants from "../../config/system/constants";
import numbers from "../../config/system/constants/numbers";
import calcControlFunc from "./calcControlFunc";
import simpleRenderOperands from "../../config/project/Operands/basic/simpleRenderOperand";
import extendedRenderOperands from "../../config/project/Operands/extended/extendedRenderOperands";
import errorMsg from "../../config/Errors/errorMsg";
import CustomError from "../../config/Errors/index";

if (constants.dot.display === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
if (constants.space.display === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);

const uiValues = {
  inputControlButtons: Object.values(calcControlFunc).map(el => {
    if (el.display === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
    return el.display.value;
  }),
  keyControlButtons:  simpleRenderOperands, // ['/', '*', '-', '+', '(', ')', 'cos(', 'sin(' ...]
  
  mainNumberButtons: [ ...Object.values(numbers).map(numObj => {
    if (numObj.display === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
    return numObj.display.value;
  }), constants.dot.display.value, constants.space.display.value],
  extendedOperands: extendedRenderOperands,
  symbolForInputFromKeyboard: '',
};

export default uiValues;