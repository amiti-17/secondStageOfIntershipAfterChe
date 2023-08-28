import CustomError from "../Errors";
import errorMsg from "../Errors/errorMsg"
import ConstantsType from "./ConstantsType";

export default class Constants implements ConstantsType {
  str: string;
  display?: { _value: string; on: number; value: any; };
  constructor(value: string, display = '') {
    this.str = String(value);
    this.display = {
      _value: display ? display : value,
      on: 0,

      set value(value) { // оцей value, як позбутися? бо без нього не працює
        throw new CustomError(errorMsg.changeValueInConfig + value);
      },

      get value() {
        this.on++;
        return this._value;
      }
    }

  };

}