import Constants from "../../Constructors/Constants"
import OperandsType from "./OperandsType";

export default class OperandsConstructor extends Constants implements OperandsType {
  // str: string;
  keyOnKeyboard?: string | undefined;
  action?: ((aOperand: string, bOperand?: string) => number);
  constructor(value: string, action?: (aOperand: string, bOperand?: string) => number, display?: string) {
    super(value, display);
    this.action = action;
  }
}