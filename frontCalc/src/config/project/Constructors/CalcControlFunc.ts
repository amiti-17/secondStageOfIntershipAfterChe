import ConstantsType from "../../../config/Constructors/ConstantsType";
import InputElementType from "../../../components/htmlInputElements/inputElement/InputElementType";
import errorMsg from "../../../config/Errors/errorMsg";
import CustomError from "../../../config/Errors";

export default class CalcControlFunc implements ConstantsType {
  str: string;
  display?: { _value: string; on: number; value: any; };
  action?: ((myInput: InputElementType) => void);
  keyOnKeyboard?: string;
  constructor(value: string, action: (myInput: InputElementType) => void, display?: string, keyOnKeyboard?: string) {
    this.str = value;
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

    this.action = action;

    this.keyOnKeyboard = keyOnKeyboard;
  }
  // constructor(value, action, display, keyOnKeyboard) {
  //   super(value, action, display);
  //   this.keyOnKeyboard = keyOnKeyboard;
  // }
}