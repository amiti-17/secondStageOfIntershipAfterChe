import Observable from "../../Observable/universal";
import values from "../../Observable/config";
import constants from "../../config/system/constants";
import CalcControlFunc from "./Constructors/CalcControlFunc";

const calcControlFunc = {
  clearAll: new CalcControlFunc('clearAll', myInput => {myInput.clearValue(); myInput.focusSetStart()}, 'AC', 'Escape'),
  clearOneSymbol: new CalcControlFunc('clearOneSymbol', myInput => {myInput.focusSet(); myInput.smartBackSpaceValue()}, 'C', 'Backspace'),
  equal: new CalcControlFunc(
    'equal',
    myInput =>  Observable.notifyAll(values.input, myInput.getValue()),// myInput.smartBackSpaceValue(value => Observable.notifyAll(values.input, value)),
    constants.equalSymbol.str,
    'Enter'
    ),
};

export default calcControlFunc;