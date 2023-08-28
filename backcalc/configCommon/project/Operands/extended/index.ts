import OperandsConstructor from "../../Constructors";
import InitialOperandType from "../basic/InitialOperandType";

const extendedOperands: InitialOperandType[] = [
  {
    cosine: new OperandsConstructor('cos', (aOperand) => {
        const a = Number(aOperand);
        return Math.cos(a);
      }, 'cos('),
  },
  {
    sinus: new OperandsConstructor('sin', (aOperand) => {
      const a = Number(aOperand);
      return Math.sin(a);
    }, 'sin('),
  },
  {
    tangents: new OperandsConstructor('tg', (aOperand) => {
      const a = Number(aOperand);
      return Math.tan(a);
    }, 'tg('),
  },
];

export default extendedOperands;