import Constants from "../../../Constructors/Constants";

export default class NumConstants extends Constants {
  num: number;
  constructor(value: string, display?: string) {
    super(value, display);
    this.num = Number(value);
  };
}
