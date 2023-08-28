import constants from "../../../system/constants";
import OperandsConstructor from "../../Constructors";
import InitialOperandType from "../basic/InitialOperandType";

const extendedOperands: InitialOperandType[] = [
  // {
  //   [constants.cos.str]: new OperandsConstructor(constants.cos.str, (aOperand) => {
  //       const a = Number(aOperand);
  //       return Math.cos(a);
  //     }, constants.cos.str + constants.openRoundBracket.str),
  // },
  // {
  //   [constants.sin.str]: new OperandsConstructor(constants.sin.str, (aOperand) => {
  //     const a = Number(aOperand);
  //     return Math.sin(a);
  //   }, constants.sin.str + constants.openRoundBracket.str),
  // },
  // {
  //   'tg': new OperandsConstructor('tg', (aOperand) => {
  //     const a = Number(aOperand);
  //     return Math.tan(a);
  //   }, 'tg'),
  // },
];

export default extendedOperands;