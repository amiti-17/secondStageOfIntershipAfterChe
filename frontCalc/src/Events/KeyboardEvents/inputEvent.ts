import keyNames from "../../config/events/keyNames";
import warning from "../../config/Errors/warningMsg";
import regExp from "../../config/system/regExp/regExp";
import calcControlFunc from "../../config/project/calcControlFunc";
import InputElementType from "../../components/htmlInputElements/inputElement/InputElementType";
import CustomError from "../../config/Errors";
import errorMsg from "../../config/Errors/errorMsg";

export default function globalKeyInputEvent() {

  return function(event: KeyboardEvent, myInput: InputElementType) {

    if (myInput.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);

    console.log(event);
    
    // regExp.allowedWithCtrlKey = /[zxcvy]/
    // if (event.ctrlKey && !(new RegExp(regExp.allowedWithCtrlKey).test(event.key))) {
    //   console.log('my reg', new RegExp(regExp.allowedWithCtrlKey).test(event.key))
    //   return;
    // }
    
    // Now it`s just return without all following code executing, but here can be add anything that relative to myInput
    if ((event.altKey || event.ctrlKey) && event.target === myInput.inputElement) {
      // console.log('skipped alt or ctrl with target - input')
       
      return;
    }

    switch (event.key) {
      case calcControlFunc.equal.keyOnKeyboard:
        event.preventDefault();
        console.log(event.key);
        if (calcControlFunc.equal.action === undefined) throw new CustomError(errorMsg.noElementFieldHere);
        
        calcControlFunc.equal.action(myInput);
        break;
      case calcControlFunc.clearAll.keyOnKeyboard:
        event.preventDefault();
        if (calcControlFunc.clearAll.action === undefined) throw new CustomError(errorMsg.noElementFieldHere);
        calcControlFunc.clearAll.action(myInput);
        break;
    }

    // add event.key into myInput, if event.key contain in validValuesForKeyboardInput regExp
    const validValuesRegExp = regExp.validValuesForKeyboardInput;
    if (event.key.match(validValuesRegExp)) {
      const currentPosition = myInput.focusSet();
      // const currentValue = myInput.getValue();
      // const newCurrentValue = currentValue.slice(0, currentPosition) + event.key + currentValue.slice(currentPosition, )
      // myInput.setValue(newCurrentValue);
      // myInput.focusSetPosition(currentPosition + 1);
      // currentPosition += 1;
      // myInput.element.setSelectionRange(currentPosition, currentPosition);
      // myInput.element.focus();
      return console.log('allRight');
    }
    switch (event.key) {
      case calcControlFunc.equal.keyOnKeyboard:
        event.preventDefault();
        console.log(event.key);
        if (calcControlFunc.equal.action === undefined) throw new CustomError(errorMsg.noElementFieldHere);
        
        calcControlFunc.equal.action(myInput);
        break;
      case calcControlFunc.clearAll.keyOnKeyboard:
        event.preventDefault();
        if (calcControlFunc.clearAll.action === undefined) throw new CustomError(errorMsg.noElementFieldHere);
        calcControlFunc.clearAll.action(myInput);
        break;
      case calcControlFunc.clearOneSymbol.keyOnKeyboard:
        event.preventDefault();
        if (calcControlFunc.clearOneSymbol.action === undefined) throw new CustomError(errorMsg.noElementFieldHere);
        calcControlFunc.clearOneSymbol.action(myInput);
        break;
      case keyNames.arrowLeft:
        event.preventDefault();
        myInput.focusSet(-1);
        break;
      case keyNames.arrowRight:
        event.preventDefault();
        myInput.focusSet(+1);
        break;
      case keyNames.arrowDown:
        event.preventDefault();
        myInput.focusSetStart();
        break;
      case keyNames.arrowUp:
        event.preventDefault();
        myInput.focusSetEnd();
        break;
      case keyNames.delete:
        break;
      default:
        if(event.target === myInput.element) {
          event.preventDefault();
        }
        console.log(warning.forbiddenInput);
        break;
    }
  }
}