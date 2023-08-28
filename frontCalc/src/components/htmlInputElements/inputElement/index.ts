import HtmlElement from "../../htmlElements/htmlElement";
import constants from "../../../config/system/constants";
import numbers from "../../../config/system/constants/numbers";
import regExpStr from "../../../config/system/regExp";
import uiConstants from "../../../config/system/constants/uiConstants";
import InputElementType from "./InputElementType";
import CustomError from "../../../config/Errors";
import errorMsg from "../../../config/Errors/errorMsg";
import flags from "../../../config/system/regExp/flags";

export default class InputElement extends HtmlElement implements InputElementType{
  inputElement: HTMLInputElement | null;

  constructor(type: string) {
    super(uiConstants.input);
    this.inputElement = document.createElement(uiConstants.input) as HTMLInputElement;
    // if (this.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
    this.setType(type);
    this.setValue(constants.emptyStr.str);
    // console.log(uiConstants, uiConstants.input, uiConstants.button, uiConstants.div);
  }
  
  focusSet(correction = 0) {
    if (this.inputElement) {
      const positionWithCorrection = (this.inputElement.selectionStart ? this.inputElement.selectionStart : 0) + correction;
      const currentPosition = positionWithCorrection > this.getValue().length ? 0 : positionWithCorrection;
      this.inputElement.setSelectionRange(currentPosition, currentPosition);
      this.inputElement.focus();
      return currentPosition;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  focusSetPosition(position = 0) {
    if (this.inputElement) {
      this.inputElement.setSelectionRange(position, position);
      this.inputElement.focus();
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  focusGetCurrentPos() {
    if (this.inputElement && (this.inputElement.selectionStart || this.inputElement.selectionStart === 0)) {
      return this.inputElement.selectionStart;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }
  
  focusSetStart() {
    if (this.inputElement) {
      this.inputElement.setSelectionRange(0, 0);
      this.inputElement.focus();
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  focusSetEnd() {
    if (this.inputElement) {
      const currentPosition = this.getValue().length;
      this.inputElement.setSelectionRange(currentPosition, currentPosition);
      this.inputElement.focus();
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  setType(type: string) {
    if (this.inputElement) {
      this.inputElement.type  = type;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  setId(id: string) {
    if (this.inputElement) {
      this.inputElement.id = id;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  setValue(value: string) {
    if (this.inputElement) {
      this.inputElement.value = value;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  getValue() {
    if (this.inputElement) {
      return this.inputElement.value;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  getValueWithoutSpace() {
    return this.getValue().replace(new RegExp(regExpStr.allEmptySymbol, flags.global), constants.emptyStr.str);
  }

  blur() {
    if (this.inputElement) {
      this.inputElement.blur();
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  clearValue() {
    if (this.inputElement) {
      this.inputElement.value = constants.emptyStr.str;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  smartBackSpaceValue() {
    if (this.inputElement) {
      const currentPosition = this.focusSet();
      if (currentPosition === numbers.zero.num) return;
      let currentValue = this.getValueWithoutSpace();
      this.setValue(currentValue.slice(0, currentPosition - 1) + currentValue.slice(currentPosition, ));
      this.inputElement.setSelectionRange(currentPosition - 1, currentPosition - 1);
      this.inputElement.focus();
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }

  inputCharOnCurrentFocus(char: string) {
    const currentFocus = this.focusSet();
    const currentValue = this.getValue();
    const newValue = currentValue.slice(0, currentFocus) + char + currentValue.slice(currentFocus, );
    this.setValue(newValue);
    this.focusSetPosition(currentFocus + char.length);
  }
}