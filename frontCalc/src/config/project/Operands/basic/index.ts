import constants from "../../../system/constants";
import OperandsConstructor from "../../Constructors";
import InitialOperandType from "./InitialOperandType";

const operands: InitialOperandType[] = [
  { // [constants.divine.str] - this expression could be here and then exported to constants, but this way better for view
    [constants.divine.str]: new OperandsConstructor(constants.divine.str, (aOperand, bOperand) => {
        const a = Number(aOperand);
        const b = Number(bOperand);
        console.log({a, b,'a / b': a / b});
        return a / b;
      }),
  },
  {
    [constants.multiple.str]: new OperandsConstructor(constants.multiple.str, (aOperand, bOperand) => {
        const a = Number(aOperand);
        const b = Number(bOperand);
        console.log({a, b,'a * b': a * b});
        return a * b;
      }),
  },
  {
    [constants.plus.str]: new OperandsConstructor(constants.plus.str, (aOperand, bOperand) => {
        const a = Number(aOperand);
        const b = Number(bOperand);
        const result = a + b;
        console.log({aOperand, bOperand, 'a + b': result});
        return result;
      }),
  },
  {
    [constants.minus.str]: new OperandsConstructor(constants.minus.str),
  },
  {
    [constants.openRoundBracket.str]: new OperandsConstructor(constants.openRoundBracket.str),
  },
  {
    [constants.closeRoundBracket.str]: new OperandsConstructor(constants.closeRoundBracket.str),
  },
];

export default operands;