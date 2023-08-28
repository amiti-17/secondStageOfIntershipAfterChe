import constants from "../../../system/constants";
import OperandsConstructor from "../../Constructors";
import InitialOperandType from "./InitialOperandType";
import { round } from "../../../myMath"
import CustomError from "../../../Errors";
import errorMsg from "../../../Errors/errorMsg";

const operands: InitialOperandType[] = [
  { // [constants.divine.str] - this expression could be here and then exported to constants, but this way better for view
    divine: new OperandsConstructor('/', (aOperand, bOperand) => {
        const a = Number(aOperand);
        const b = Number(bOperand);
        console.log({a, b,'a / b': a / b});
        return a / b;
      }),
  },
  {
    multiple: new OperandsConstructor('*', (aOperand, bOperand) => {
        const a = Number(aOperand);
        const b = Number(bOperand);
        console.log({a, b,'a * b': a * b});
        return a * b;
      }),
  },
  {
    plus: new OperandsConstructor('+', (aOperand, bOperand) => {
        if (bOperand === undefined) throw new CustomError(errorMsg.currentValueIsUndefined);
        const a = Number(aOperand);
        const b = Number(bOperand);
        const result = a + b;
        console.log({aOperand, bOperand, 'a + b': result});
        return round(aOperand, bOperand, result);
      }),
  },
  {
    minus: new OperandsConstructor('-'),
  },
  {
    openRoundBracket: new OperandsConstructor('('),
  },
  {
    closeRoundBracket: new OperandsConstructor(')'),
  },
];

export default operands;