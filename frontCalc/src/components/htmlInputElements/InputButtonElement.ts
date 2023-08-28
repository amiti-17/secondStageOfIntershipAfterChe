import uiConstants from "../../config/system/constants/uiConstants";
import InputElement from "./inputElement";

export default class InputButtonElement extends InputElement {
  constructor(value: string) {
    // console.log(uiConstants)
    super(uiConstants.button);
    this.setValue(value);
  }
}