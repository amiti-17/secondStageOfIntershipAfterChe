import ConstantsType from "../../Constructors/ConstantsType";
import NumConstants from "./Constructors/NumConstants";

interface NumConstantsType extends ConstantsType {
  num: number;
}

const numbers: {
  [key: string]: NumConstantsType;
} = {
  "one": new NumConstants('1'),
  two: new NumConstants('2'),
  three: new NumConstants('3'),
  four: new NumConstants('4'),
  five: new NumConstants('5'),
  six: new NumConstants('6'),
  seven: new NumConstants('7'),
  eight: new NumConstants('8'),
  nine: new NumConstants('9'),
  zero: new NumConstants('0'),
}

export default numbers;