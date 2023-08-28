import InputButtonElement from "./InputButtonElement";
import constants from "../../config/system/constants";
import eventNames from "../../config/events"
import InputElementType from "./inputElement/InputElementType";
import CustomError from "../../config/Errors";
import errorMsg from "../../config/Errors/errorMsg";

export default class LinkedInputButtonElement extends InputButtonElement {
  constructor(value: string, myInput: InputElementType) {

    super(value);
    // console.log("value: ", value)

    this.setValue(value);
    
    if (!this.inputElement) throw new CustomError(errorMsg.noElementFieldHere);
    this.inputElement.addEventListener(eventNames.click, e => {
      e.preventDefault();
    
    if (constants.space.display && value === constants.space.display.value) {
      myInput.inputCharOnCurrentFocus(constants.space.str);
      return;
    }

    myInput.inputCharOnCurrentFocus(value);

    });
  }
}