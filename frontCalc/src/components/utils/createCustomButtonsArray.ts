import InputButtonElement from "../htmlInputElements/InputButtonElement";
import eventNames from '../../config/events';
import calcControlFunc from "../../config/project/calcControlFunc"
import InputElementType from "../htmlInputElements/inputElement/InputElementType";
import CustomError from "../../config/Errors";
import errorMsg from "../../config/Errors/errorMsg";

export default function fillUsingSpecialButtons(myInput: InputElementType, ...args: string[]) {
  const mySpecialDialPadComponents: HTMLElement[] = [];
  args.forEach(inputElement => {
    if (calcControlFunc.equal.display === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
    switch(inputElement) {
      case calcControlFunc.equal.display.value:
        const equalButton = new InputButtonElement(inputElement);
        equalButton.setValue(inputElement);
        if (equalButton.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
        equalButton.inputElement.addEventListener(eventNames.click, (e) => {
          e.preventDefault();
          const currentAction = calcControlFunc.equal.action?.bind(null);
          if (currentAction === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
          currentAction(myInput);
        });
        mySpecialDialPadComponents.push(equalButton.inputElement);
        break;

      case calcControlFunc.clearOneSymbol.display?.value:
        const backSpaceButton = new InputButtonElement(inputElement);
        if (backSpaceButton.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
        backSpaceButton.setValue(inputElement);
        backSpaceButton.inputElement.addEventListener(eventNames.click, (e) => {
          const currentAction = calcControlFunc.clearOneSymbol.action?.bind(null);
          if (currentAction === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
          currentAction(myInput);
        });
        mySpecialDialPadComponents.push(backSpaceButton.inputElement);
        break;

      case calcControlFunc.clearAll.display?.value:
        const resetButton = new InputButtonElement(inputElement);
        if (resetButton.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
        resetButton.setValue(inputElement);
        resetButton.inputElement.addEventListener(eventNames.click, (e) => {
          e.preventDefault();
          const currentAction = calcControlFunc.clearAll.action?.bind(null);
          if (currentAction === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
          currentAction(myInput);
        });
        mySpecialDialPadComponents.push(resetButton.inputElement);
        break;

      default:
        break;
    }
  });
  return mySpecialDialPadComponents;
}
