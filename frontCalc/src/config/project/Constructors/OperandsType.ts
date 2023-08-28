import ConstantsType from "../../Constructors/ConstantsType";

export default interface OperandsType extends ConstantsType {
  keyOnKeyboard?: string;
  action?: ((aOperand: string, bOperand?: string) => number);
}