import Constants from "../../Constructors/Constants";
import ConstantsType from "../../Constructors/ConstantsType";

const constants: {
  [key: string]: ConstantsType;
} = {
  dot: new Constants('.'),
  space: new Constants(' ', '\u2423'),
  emptyStr: new Constants(''),
  plus: new Constants('+'),
  minus: new Constants('-'),
  openRoundBracket: new Constants('('),
  closeRoundBracket: new Constants(')'),
  comma: new Constants(','),
  invalidFormat: new Constants('Invalid format'),
  equalSymbol: new Constants('='),
  backSpaceValue: new Constants('C'),
  clearValue: new Constants('AC'),
  multiple: new Constants('*'),
  divine: new Constants('/'),
  cos: new Constants('cos'),
  sin: new Constants('sin'),
  doubleMinus: new Constants('--'),
  escapedSpace: new Constants('\\s'),
  number: new Constants('number'),
};

export default constants;