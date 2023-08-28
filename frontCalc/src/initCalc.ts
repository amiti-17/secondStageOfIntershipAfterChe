import values from "./Observable/config";
import globalKeyInputEvent from "./Events/KeyboardEvents/inputEvent";
import Observable from "./Observable/universal";
import render from "./components";
import CustomError from "./config/Errors";
import errorMsg from "./config/Errors/errorMsg";
import calculate from "./frontCalc";
import eventNames from "./config/events";
import removeLoader from "./components/loader/removeLoader";

export default function initCalc() {

  removeLoader();
  
  const globalKeyboardEvent = globalKeyInputEvent();
  const renderObj = render();
  const { myInput } = renderObj;
  
  if (myInput.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
  Observable.subscribe(values.output, myInput.setValue.bind(myInput));
  Observable.subscribe(values.input, calculate);

  myInput.setValue('cos(2(1+(2*6)-3))');

  document.body.addEventListener(eventNames.keydown, (e) => {
    const keyboardEvent = e as KeyboardEvent;
    globalKeyboardEvent(keyboardEvent, myInput);
  });
}